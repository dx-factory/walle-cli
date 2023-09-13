import { Selector } from "../../../../../ui/components/Selector/Selector";
import { TextField } from "../../../../../ui/components/TextField/TextField";
import { SequentialChainHandler } from "../../../../common/utils/chains/SequentialChain/SequentialChainHandler";
import { SelectedManualDesign } from "../../design.types";

export class DesignManualHandler extends SequentialChainHandler<SelectedManualDesign> {
  public async handle(request: SelectedManualDesign): Promise<SelectedManualDesign> {
    const manualRef = await TextField.ask({
      message: "Enter the manual reference name:",
      placeholder: "module, ui, component...",
      validate: (value) => {
        if (!value.length) return "Manual reference name cannot be empty.";
      },
    });
    const withFolder = await Selector.select({
      message: "Do you want to create a folder for this manual?",
      options: [
        {
          label: "Yes",
          value: true,
          hint: "A folder will be created with the same name as the manual reference to wrap all files.",
        },
        {
          label: "No",
          value: false,
        },
      ],
    });
    return await super.handle({ ...request, folder: withFolder as boolean, ref: manualRef });
  }
}
