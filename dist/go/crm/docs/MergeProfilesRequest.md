# MergeProfilesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VictimProfileId** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileDetails** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMergeProfilesRequest

`func NewMergeProfilesRequest() *MergeProfilesRequest`

NewMergeProfilesRequest instantiates a new MergeProfilesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMergeProfilesRequestWithDefaults

`func NewMergeProfilesRequestWithDefaults() *MergeProfilesRequest`

NewMergeProfilesRequestWithDefaults instantiates a new MergeProfilesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVictimProfileId

`func (o *MergeProfilesRequest) GetVictimProfileId() []UniqueIDType`

GetVictimProfileId returns the VictimProfileId field if non-nil, zero value otherwise.

### GetVictimProfileIdOk

`func (o *MergeProfilesRequest) GetVictimProfileIdOk() (*[]UniqueIDType, bool)`

GetVictimProfileIdOk returns a tuple with the VictimProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVictimProfileId

`func (o *MergeProfilesRequest) SetVictimProfileId(v []UniqueIDType)`

SetVictimProfileId sets VictimProfileId field to given value.

### HasVictimProfileId

`func (o *MergeProfilesRequest) HasVictimProfileId() bool`

HasVictimProfileId returns a boolean if a field has been set.

### GetProfileIdList

`func (o *MergeProfilesRequest) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *MergeProfilesRequest) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *MergeProfilesRequest) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *MergeProfilesRequest) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileDetails

`func (o *MergeProfilesRequest) GetProfileDetails() ProfileType`

GetProfileDetails returns the ProfileDetails field if non-nil, zero value otherwise.

### GetProfileDetailsOk

`func (o *MergeProfilesRequest) GetProfileDetailsOk() (*ProfileType, bool)`

GetProfileDetailsOk returns a tuple with the ProfileDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDetails

`func (o *MergeProfilesRequest) SetProfileDetails(v ProfileType)`

SetProfileDetails sets ProfileDetails field to given value.

### HasProfileDetails

`func (o *MergeProfilesRequest) HasProfileDetails() bool`

HasProfileDetails returns a boolean if a field has been set.

### GetLinks

`func (o *MergeProfilesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MergeProfilesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MergeProfilesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MergeProfilesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MergeProfilesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MergeProfilesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MergeProfilesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MergeProfilesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


