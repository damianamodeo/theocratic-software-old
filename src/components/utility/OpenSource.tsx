import Accordian from "@CONTAINERS/Disclosure";

const OpenSource = () => {
  const apache = (
    <div>
      <p className={`my-3`}>
        Licensed under the Apache License, Version 2.0 (the "License"); you may
        not use this file except in compliance with the License. You may obtain
        a copy of the License at
      </p>
      <p className={`my-3`}>http://www.apache.org/licenses/LICENSE-2.0</p>
      <p className={`my-3`}>
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
      </p>
    </div>
  );
  const sources = [
    {
      name: "Dexie",
      owner: "David Fahlander",
      year: "2023",
      url: "https://dexie.org/",
      licence: apache,
    },
  ];
  return (
    <div className="m-6">
      {sources.map((source, index) => (
        <div
          key={index}
          className="mt-8 font-bold dark:text-white list-disc p-4"
        >
          <Accordian
            title={
              <>
                <div className={`text-3xl m-2`}>
                  {source.name}{" "}
                  <p className={`text-base font-normal`}>
                    Copyright {source.year} {source.owner}
                  </p>
                </div>
              </>
            }
          >
            <div className="mt-1 font-light">
              <a href={source.url} className="text-blue-500 underline">
                {source.url}
              </a>
              {source.licence}
            </div>
          </Accordian>
        </div>
      ))}
    </div>
  );
};

export default OpenSource;
