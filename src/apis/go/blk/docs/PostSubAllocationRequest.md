# PostSubAllocationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubAllocations** | Pointer to [**SubAllocationsType**](SubAllocationsType.md) |  | [optional] 
**FetchInstructions** | Pointer to [**[]BlockDetailInstructionType**](BlockDetailInstructionType.md) | The instruction to determine the block information to be returned in a successful create operation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostSubAllocationRequest

`func NewPostSubAllocationRequest() *PostSubAllocationRequest`

NewPostSubAllocationRequest instantiates a new PostSubAllocationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostSubAllocationRequestWithDefaults

`func NewPostSubAllocationRequestWithDefaults() *PostSubAllocationRequest`

NewPostSubAllocationRequestWithDefaults instantiates a new PostSubAllocationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubAllocations

`func (o *PostSubAllocationRequest) GetSubAllocations() SubAllocationsType`

GetSubAllocations returns the SubAllocations field if non-nil, zero value otherwise.

### GetSubAllocationsOk

`func (o *PostSubAllocationRequest) GetSubAllocationsOk() (*SubAllocationsType, bool)`

GetSubAllocationsOk returns a tuple with the SubAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubAllocations

`func (o *PostSubAllocationRequest) SetSubAllocations(v SubAllocationsType)`

SetSubAllocations sets SubAllocations field to given value.

### HasSubAllocations

`func (o *PostSubAllocationRequest) HasSubAllocations() bool`

HasSubAllocations returns a boolean if a field has been set.

### GetFetchInstructions

`func (o *PostSubAllocationRequest) GetFetchInstructions() []BlockDetailInstructionType`

GetFetchInstructions returns the FetchInstructions field if non-nil, zero value otherwise.

### GetFetchInstructionsOk

`func (o *PostSubAllocationRequest) GetFetchInstructionsOk() (*[]BlockDetailInstructionType, bool)`

GetFetchInstructionsOk returns a tuple with the FetchInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchInstructions

`func (o *PostSubAllocationRequest) SetFetchInstructions(v []BlockDetailInstructionType)`

SetFetchInstructions sets FetchInstructions field to given value.

### HasFetchInstructions

`func (o *PostSubAllocationRequest) HasFetchInstructions() bool`

HasFetchInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *PostSubAllocationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostSubAllocationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostSubAllocationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostSubAllocationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSubAllocationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSubAllocationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSubAllocationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSubAllocationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


