import { Container, Button } from "@/components";
import { Input, TextEditor, Upload } from "@/components/Form";
import { Icons } from "@/utility";
import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* <Breadcrumb /> */}
      <section>
        <Container>
          <form>
            <div className="grid grid-cols-3 gap-x-6 gap-y-5">
              <Input isRequired label="subject" type="text" />
              <Input isRequired label="name" type="text" />
              <Input isRequired label="email" type="email" />
              <TextEditor
                label={"Hello"}
                isRequired
                parentClassName="col-span-2"
              />
              <Upload label="email" />
            </div>
            <div className="flex justify-end mt-6">
              <Button className="py-3 px-4" variant="primary">
                {Icons.SendIcon}save
              </Button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};
export default ContactUs;
