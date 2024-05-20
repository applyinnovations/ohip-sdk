# ProfileCashieringDetailsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProfileCashieringDetailList** | Pointer to [**[]ProfileCashieringDetailType**](ProfileCashieringDetailType.md) | Cashiering details for the profile. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileCashieringDetailsInfo

`func NewProfileCashieringDetailsInfo() *ProfileCashieringDetailsInfo`

NewProfileCashieringDetailsInfo instantiates a new ProfileCashieringDetailsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCashieringDetailsInfoWithDefaults

`func NewProfileCashieringDetailsInfoWithDefaults() *ProfileCashieringDetailsInfo`

NewProfileCashieringDetailsInfoWithDefaults instantiates a new ProfileCashieringDetailsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ProfileCashieringDetailsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileCashieringDetailsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileCashieringDetailsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileCashieringDetailsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileCashieringDetailList

`func (o *ProfileCashieringDetailsInfo) GetProfileCashieringDetailList() []ProfileCashieringDetailType`

GetProfileCashieringDetailList returns the ProfileCashieringDetailList field if non-nil, zero value otherwise.

### GetProfileCashieringDetailListOk

`func (o *ProfileCashieringDetailsInfo) GetProfileCashieringDetailListOk() (*[]ProfileCashieringDetailType, bool)`

GetProfileCashieringDetailListOk returns a tuple with the ProfileCashieringDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCashieringDetailList

`func (o *ProfileCashieringDetailsInfo) SetProfileCashieringDetailList(v []ProfileCashieringDetailType)`

SetProfileCashieringDetailList sets ProfileCashieringDetailList field to given value.

### HasProfileCashieringDetailList

`func (o *ProfileCashieringDetailsInfo) HasProfileCashieringDetailList() bool`

HasProfileCashieringDetailList returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileCashieringDetailsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileCashieringDetailsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileCashieringDetailsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileCashieringDetailsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


