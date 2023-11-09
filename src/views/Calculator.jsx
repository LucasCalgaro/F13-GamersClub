import React from "react";
import PageComponent from "../components/PageComponent";
import { Button, Input, Progress, Typography } from "@material-tailwind/react";


export default function Calculator() {
    const [stageError, setStageError] = React.useState(false);
    const [currentStage, setCurrentStage] = React.useState(1);
    const [stageSuccess, setStageSuccess] = React.useState(false);

    const errorIdentified = (value) => {
        setStageError(value);
        setCurrentStage(value);
        setStageSuccess(value - 1);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

    }
    return (

        <PageComponent title={"Calculator"} buttons={
            <div className="">
                <div className="flex gap-4 mt-3 ml-4 text-white md:mr-0 mr-4">
                    <Typography color="blue-gray" variant="p">
                        Etapas:
                    </Typography>
                    <Progress value={25} color="green" className="md:h-5 md:w-72 md:mt-1 mt-2 h-3 w-20 bg-gray-100" />
                    <Typography color="blue-gray" variant="p">
                        {stageSuccess ? stageSuccess : "0"}/10
                    </Typography>
                </div>
            </div>
        }>
            <>
                <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />

                <form action="#" method="POST" onSubmit={onSubmit} className="bg-zinc-900 text-white">
                    <div className="w-72">
                    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
    </div>
                    </div>
                </form>
            </>
        </PageComponent>

    );
}