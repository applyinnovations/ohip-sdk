# CopyCateringEventsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**CopyAsSnapshot** | Pointer to **bool** | Indicates wether to perform pre-cahnge or post-change snapshot of the copied events. By default, it is always considered as false and will provide post-change snapshot. | [optional] 
**CopyInstructions** | Pointer to [**[]CateringEventCopyInstructionType**](CateringEventCopyInstructionType.md) | Indicate weather to include Catering Event Copy Options. e.g. sub events, notes. | [optional] 
**CopyStatusMode** | Pointer to [**CopyStatusModeType**](CopyStatusModeType.md) |  | [optional] 
**CopyToDates** | Pointer to [**DatesType**](DatesType.md) |  | [optional] 
**CopyToPackageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code where event will be copied. | [optional] 

## Methods

### NewCopyCateringEventsType

`func NewCopyCateringEventsType() *CopyCateringEventsType`

NewCopyCateringEventsType instantiates a new CopyCateringEventsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringEventsTypeWithDefaults

`func NewCopyCateringEventsTypeWithDefaults() *CopyCateringEventsType`

NewCopyCateringEventsTypeWithDefaults instantiates a new CopyCateringEventsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *CopyCateringEventsType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *CopyCateringEventsType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *CopyCateringEventsType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *CopyCateringEventsType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetCopyAsSnapshot

`func (o *CopyCateringEventsType) GetCopyAsSnapshot() bool`

GetCopyAsSnapshot returns the CopyAsSnapshot field if non-nil, zero value otherwise.

### GetCopyAsSnapshotOk

`func (o *CopyCateringEventsType) GetCopyAsSnapshotOk() (*bool, bool)`

GetCopyAsSnapshotOk returns a tuple with the CopyAsSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyAsSnapshot

`func (o *CopyCateringEventsType) SetCopyAsSnapshot(v bool)`

SetCopyAsSnapshot sets CopyAsSnapshot field to given value.

### HasCopyAsSnapshot

`func (o *CopyCateringEventsType) HasCopyAsSnapshot() bool`

HasCopyAsSnapshot returns a boolean if a field has been set.

### GetCopyInstructions

`func (o *CopyCateringEventsType) GetCopyInstructions() []CateringEventCopyInstructionType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *CopyCateringEventsType) GetCopyInstructionsOk() (*[]CateringEventCopyInstructionType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *CopyCateringEventsType) SetCopyInstructions(v []CateringEventCopyInstructionType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *CopyCateringEventsType) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetCopyStatusMode

`func (o *CopyCateringEventsType) GetCopyStatusMode() CopyStatusModeType`

GetCopyStatusMode returns the CopyStatusMode field if non-nil, zero value otherwise.

### GetCopyStatusModeOk

`func (o *CopyCateringEventsType) GetCopyStatusModeOk() (*CopyStatusModeType, bool)`

GetCopyStatusModeOk returns a tuple with the CopyStatusMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyStatusMode

`func (o *CopyCateringEventsType) SetCopyStatusMode(v CopyStatusModeType)`

SetCopyStatusMode sets CopyStatusMode field to given value.

### HasCopyStatusMode

`func (o *CopyCateringEventsType) HasCopyStatusMode() bool`

HasCopyStatusMode returns a boolean if a field has been set.

### GetCopyToDates

`func (o *CopyCateringEventsType) GetCopyToDates() DatesType`

GetCopyToDates returns the CopyToDates field if non-nil, zero value otherwise.

### GetCopyToDatesOk

`func (o *CopyCateringEventsType) GetCopyToDatesOk() (*DatesType, bool)`

GetCopyToDatesOk returns a tuple with the CopyToDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToDates

`func (o *CopyCateringEventsType) SetCopyToDates(v DatesType)`

SetCopyToDates sets CopyToDates field to given value.

### HasCopyToDates

`func (o *CopyCateringEventsType) HasCopyToDates() bool`

HasCopyToDates returns a boolean if a field has been set.

### GetCopyToPackageId

`func (o *CopyCateringEventsType) GetCopyToPackageId() UniqueIDType`

GetCopyToPackageId returns the CopyToPackageId field if non-nil, zero value otherwise.

### GetCopyToPackageIdOk

`func (o *CopyCateringEventsType) GetCopyToPackageIdOk() (*UniqueIDType, bool)`

GetCopyToPackageIdOk returns a tuple with the CopyToPackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToPackageId

`func (o *CopyCateringEventsType) SetCopyToPackageId(v UniqueIDType)`

SetCopyToPackageId sets CopyToPackageId field to given value.

### HasCopyToPackageId

`func (o *CopyCateringEventsType) HasCopyToPackageId() bool`

HasCopyToPackageId returns a boolean if a field has been set.

### GetEventIdList

`func (o *CopyCateringEventsType) GetEventIdList() UniqueIDListType`

GetEventIdList returns the EventIdList field if non-nil, zero value otherwise.

### GetEventIdListOk

`func (o *CopyCateringEventsType) GetEventIdListOk() (*UniqueIDListType, bool)`

GetEventIdListOk returns a tuple with the EventIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventIdList

`func (o *CopyCateringEventsType) SetEventIdList(v UniqueIDListType)`

SetEventIdList sets EventIdList field to given value.

### HasEventIdList

`func (o *CopyCateringEventsType) HasEventIdList() bool`

HasEventIdList returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyCateringEventsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyCateringEventsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyCateringEventsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyCateringEventsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


