# ChangedRoutingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PostingsForRoomRouting** | Pointer to [**PostingsInfoType**](PostingsInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangedRoutingInstructions

`func NewChangedRoutingInstructions() *ChangedRoutingInstructions`

NewChangedRoutingInstructions instantiates a new ChangedRoutingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangedRoutingInstructionsWithDefaults

`func NewChangedRoutingInstructionsWithDefaults() *ChangedRoutingInstructions`

NewChangedRoutingInstructionsWithDefaults instantiates a new ChangedRoutingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangedRoutingInstructions) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangedRoutingInstructions) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangedRoutingInstructions) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangedRoutingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostingsForRoomRouting

`func (o *ChangedRoutingInstructions) GetPostingsForRoomRouting() PostingsInfoType`

GetPostingsForRoomRouting returns the PostingsForRoomRouting field if non-nil, zero value otherwise.

### GetPostingsForRoomRoutingOk

`func (o *ChangedRoutingInstructions) GetPostingsForRoomRoutingOk() (*PostingsInfoType, bool)`

GetPostingsForRoomRoutingOk returns a tuple with the PostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingsForRoomRouting

`func (o *ChangedRoutingInstructions) SetPostingsForRoomRouting(v PostingsInfoType)`

SetPostingsForRoomRouting sets PostingsForRoomRouting field to given value.

### HasPostingsForRoomRouting

`func (o *ChangedRoutingInstructions) HasPostingsForRoomRouting() bool`

HasPostingsForRoomRouting returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangedRoutingInstructions) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangedRoutingInstructions) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangedRoutingInstructions) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangedRoutingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


