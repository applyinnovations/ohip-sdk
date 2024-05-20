# CreatedRoutingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PostingsForRoomRouting** | Pointer to [**PostingsInfoType**](PostingsInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreatedRoutingInstructions

`func NewCreatedRoutingInstructions() *CreatedRoutingInstructions`

NewCreatedRoutingInstructions instantiates a new CreatedRoutingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatedRoutingInstructionsWithDefaults

`func NewCreatedRoutingInstructionsWithDefaults() *CreatedRoutingInstructions`

NewCreatedRoutingInstructionsWithDefaults instantiates a new CreatedRoutingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CreatedRoutingInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreatedRoutingInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreatedRoutingInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreatedRoutingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostingsForRoomRouting

`func (o *CreatedRoutingInstructions) GetPostingsForRoomRouting() PostingsInfoType`

GetPostingsForRoomRouting returns the PostingsForRoomRouting field if non-nil, zero value otherwise.

### GetPostingsForRoomRoutingOk

`func (o *CreatedRoutingInstructions) GetPostingsForRoomRoutingOk() (*PostingsInfoType, bool)`

GetPostingsForRoomRoutingOk returns a tuple with the PostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingsForRoomRouting

`func (o *CreatedRoutingInstructions) SetPostingsForRoomRouting(v PostingsInfoType)`

SetPostingsForRoomRouting sets PostingsForRoomRouting field to given value.

### HasPostingsForRoomRouting

`func (o *CreatedRoutingInstructions) HasPostingsForRoomRouting() bool`

HasPostingsForRoomRouting returns a boolean if a field has been set.

### GetWarnings

`func (o *CreatedRoutingInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreatedRoutingInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreatedRoutingInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreatedRoutingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


