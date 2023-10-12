# RotationGroupsResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationGroup** | Pointer to [**[]RotationGroupType**](RotationGroupType.md) |  | [optional] 
**MasterInfo** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Collection of Room Type Code Description. | [optional] 

## Methods

### NewRotationGroupsResultType

`func NewRotationGroupsResultType() *RotationGroupsResultType`

NewRotationGroupsResultType instantiates a new RotationGroupsResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationGroupsResultTypeWithDefaults

`func NewRotationGroupsResultTypeWithDefaults() *RotationGroupsResultType`

NewRotationGroupsResultTypeWithDefaults instantiates a new RotationGroupsResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationGroup

`func (o *RotationGroupsResultType) GetRotationGroup() []RotationGroupType`

GetRotationGroup returns the RotationGroup field if non-nil, zero value otherwise.

### GetRotationGroupOk

`func (o *RotationGroupsResultType) GetRotationGroupOk() (*[]RotationGroupType, bool)`

GetRotationGroupOk returns a tuple with the RotationGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationGroup

`func (o *RotationGroupsResultType) SetRotationGroup(v []RotationGroupType)`

SetRotationGroup sets RotationGroup field to given value.

### HasRotationGroup

`func (o *RotationGroupsResultType) HasRotationGroup() bool`

HasRotationGroup returns a boolean if a field has been set.

### GetMasterInfo

`func (o *RotationGroupsResultType) GetMasterInfo() []MasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *RotationGroupsResultType) GetMasterInfoOk() (*[]MasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *RotationGroupsResultType) SetMasterInfo(v []MasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *RotationGroupsResultType) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


