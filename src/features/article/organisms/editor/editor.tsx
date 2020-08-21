import React, { useState } from "react";
import { Button } from "@chakra-ui/core";
import Article from "../../templates/article";
import Draft from "../../molecules/draft/draft";

interface EditorProps {
  handleSubmit: (e: any) => void;
  draftData: {
    title: string;
    description: string;
    body: string;
  };
}

const Editor = ({ draftData: initialDraftData, handleSubmit }: EditorProps) => {
  const [showPreview, setShowPreview] = useState(false);
  const [draftData, setDraftData] = useState(initialDraftData);

  const handleToggleShowPreview = () => setShowPreview(!showPreview);
  const handleChangeDraftData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraftData({ ...draftData, [e.target.name]: e.currentTarget.value });
  };

  return (
    <>
      {showPreview ? (
        <>
          <Button onClick={handleToggleShowPreview} size="sm" mb={10}>
            Close preview
          </Button>
          <Article
            {...draftData}
            comments={[]}
            handleSubmitComment={() => {}}
            id={""}
            created={""}
          />
        </>
      ) : (
        <Draft
          draftData={draftData}
          handleSubmit={handleSubmit}
          handleToggleShowPreview={handleToggleShowPreview}
          handleChangeDraftData={handleChangeDraftData}
        />
      )}
    </>
  );
};

export default Editor;
