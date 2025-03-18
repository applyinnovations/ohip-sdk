# CopyAndMoveEventResourcesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code where event resources will be copied/moved. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**ResourceIdList** | Pointer to [**[]ResourceCopyAndMoveType**](ResourceCopyAndMoveType.md) | Resource Type and its UniqueID. | [optional] 
**TargetBlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TargetEventIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**OverrideCopyAndMoveResourceProcessWarnings** | Pointer to **bool** | Indicates whether to override warnings for copying/moving resources. By default, it is always considered as false and will provide post-change warnings. | [optional] 
**IncludeAsPackage** | Pointer to **bool** | Flag to indicate if the resources have to be copied as a package. | [optional] 

## Methods

### NewCopyAndMoveEventResourcesType

`func NewCopyAndMoveEventResourcesType() *CopyAndMoveEventResourcesType`

NewCopyAndMoveEventResourcesType instantiates a new CopyAndMoveEventResourcesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyAndMoveEventResourcesTypeWithDefaults

`func NewCopyAndMoveEventResourcesTypeWithDefaults() *CopyAndMoveEventResourcesType`

NewCopyAndMoveEventResourcesTypeWithDefaults instantiates a new CopyAndMoveEventResourcesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyAndMoveEventResourcesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyAndMoveEventResourcesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyAndMoveEventResourcesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyAndMoveEventResourcesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *CopyAndMoveEventResourcesType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *CopyAndMoveEventResourcesType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *CopyAndMoveEventResourcesType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *CopyAndMoveEventResourcesType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEventId

`func (o *CopyAndMoveEventResourcesType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *CopyAndMoveEventResourcesType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *CopyAndMoveEventResourcesType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *CopyAndMoveEventResourcesType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetResourceIdList

`func (o *CopyAndMoveEventResourcesType) GetResourceIdList() []ResourceCopyAndMoveType`

GetResourceIdList returns the ResourceIdList field if non-nil, zero value otherwise.

### GetResourceIdListOk

`func (o *CopyAndMoveEventResourcesType) GetResourceIdListOk() (*[]ResourceCopyAndMoveType, bool)`

GetResourceIdListOk returns a tuple with the ResourceIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceIdList

`func (o *CopyAndMoveEventResourcesType) SetResourceIdList(v []ResourceCopyAndMoveType)`

SetResourceIdList sets ResourceIdList field to given value.

### HasResourceIdList

`func (o *CopyAndMoveEventResourcesType) HasResourceIdList() bool`

HasResourceIdList returns a boolean if a field has been set.

### GetTargetBlockId

`func (o *CopyAndMoveEventResourcesType) GetTargetBlockId() UniqueIDType`

GetTargetBlockId returns the TargetBlockId field if non-nil, zero value otherwise.

### GetTargetBlockIdOk

`func (o *CopyAndMoveEventResourcesType) GetTargetBlockIdOk() (*UniqueIDType, bool)`

GetTargetBlockIdOk returns a tuple with the TargetBlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetBlockId

`func (o *CopyAndMoveEventResourcesType) SetTargetBlockId(v UniqueIDType)`

SetTargetBlockId sets TargetBlockId field to given value.

### HasTargetBlockId

`func (o *CopyAndMoveEventResourcesType) HasTargetBlockId() bool`

HasTargetBlockId returns a boolean if a field has been set.

### GetTargetEventIdList

`func (o *CopyAndMoveEventResourcesType) GetTargetEventIdList() []UniqueIDType`

GetTargetEventIdList returns the TargetEventIdList field if non-nil, zero value otherwise.

### GetTargetEventIdListOk

`func (o *CopyAndMoveEventResourcesType) GetTargetEventIdListOk() (*[]UniqueIDType, bool)`

GetTargetEventIdListOk returns a tuple with the TargetEventIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetEventIdList

`func (o *CopyAndMoveEventResourcesType) SetTargetEventIdList(v []UniqueIDType)`

SetTargetEventIdList sets TargetEventIdList field to given value.

### HasTargetEventIdList

`func (o *CopyAndMoveEventResourcesType) HasTargetEventIdList() bool`

HasTargetEventIdList returns a boolean if a field has been set.

### GetOverrideCopyAndMoveResourceProcessWarnings

`func (o *CopyAndMoveEventResourcesType) GetOverrideCopyAndMoveResourceProcessWarnings() bool`

GetOverrideCopyAndMoveResourceProcessWarnings returns the OverrideCopyAndMoveResourceProcessWarnings field if non-nil, zero value otherwise.

### GetOverrideCopyAndMoveResourceProcessWarningsOk

`func (o *CopyAndMoveEventResourcesType) GetOverrideCopyAndMoveResourceProcessWarningsOk() (*bool, bool)`

GetOverrideCopyAndMoveResourceProcessWarningsOk returns a tuple with the OverrideCopyAndMoveResourceProcessWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCopyAndMoveResourceProcessWarnings

`func (o *CopyAndMoveEventResourcesType) SetOverrideCopyAndMoveResourceProcessWarnings(v bool)`

SetOverrideCopyAndMoveResourceProcessWarnings sets OverrideCopyAndMoveResourceProcessWarnings field to given value.

### HasOverrideCopyAndMoveResourceProcessWarnings

`func (o *CopyAndMoveEventResourcesType) HasOverrideCopyAndMoveResourceProcessWarnings() bool`

HasOverrideCopyAndMoveResourceProcessWarnings returns a boolean if a field has been set.

### GetIncludeAsPackage

`func (o *CopyAndMoveEventResourcesType) GetIncludeAsPackage() bool`

GetIncludeAsPackage returns the IncludeAsPackage field if non-nil, zero value otherwise.

### GetIncludeAsPackageOk

`func (o *CopyAndMoveEventResourcesType) GetIncludeAsPackageOk() (*bool, bool)`

GetIncludeAsPackageOk returns a tuple with the IncludeAsPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAsPackage

`func (o *CopyAndMoveEventResourcesType) SetIncludeAsPackage(v bool)`

SetIncludeAsPackage sets IncludeAsPackage field to given value.

### HasIncludeAsPackage

`func (o *CopyAndMoveEventResourcesType) HasIncludeAsPackage() bool`

HasIncludeAsPackage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


