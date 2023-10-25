# ProfileCommissionAccountInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileCommissionAccountInfoList** | Pointer to [**[]ProfileCommissionAccountInfoType**](ProfileCommissionAccountInfoType.md) | Profile commission info which contains bank account and commission code details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewProfileCommissionAccountInfo

`func NewProfileCommissionAccountInfo() *ProfileCommissionAccountInfo`

NewProfileCommissionAccountInfo instantiates a new ProfileCommissionAccountInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCommissionAccountInfoWithDefaults

`func NewProfileCommissionAccountInfoWithDefaults() *ProfileCommissionAccountInfo`

NewProfileCommissionAccountInfoWithDefaults instantiates a new ProfileCommissionAccountInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileCommissionAccountInfoList

`func (o *ProfileCommissionAccountInfo) GetProfileCommissionAccountInfoList() []ProfileCommissionAccountInfoType`

GetProfileCommissionAccountInfoList returns the ProfileCommissionAccountInfoList field if non-nil, zero value otherwise.

### GetProfileCommissionAccountInfoListOk

`func (o *ProfileCommissionAccountInfo) GetProfileCommissionAccountInfoListOk() (*[]ProfileCommissionAccountInfoType, bool)`

GetProfileCommissionAccountInfoListOk returns a tuple with the ProfileCommissionAccountInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCommissionAccountInfoList

`func (o *ProfileCommissionAccountInfo) SetProfileCommissionAccountInfoList(v []ProfileCommissionAccountInfoType)`

SetProfileCommissionAccountInfoList sets ProfileCommissionAccountInfoList field to given value.

### HasProfileCommissionAccountInfoList

`func (o *ProfileCommissionAccountInfo) HasProfileCommissionAccountInfoList() bool`

HasProfileCommissionAccountInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileCommissionAccountInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileCommissionAccountInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileCommissionAccountInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileCommissionAccountInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


