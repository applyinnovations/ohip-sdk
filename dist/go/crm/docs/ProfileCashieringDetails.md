# ProfileCashieringDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileCashieringDetailList** | Pointer to [**[]ProfileCashieringDetailType**](ProfileCashieringDetailType.md) | Cashiering details for the profile. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileCashieringDetails

`func NewProfileCashieringDetails() *ProfileCashieringDetails`

NewProfileCashieringDetails instantiates a new ProfileCashieringDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCashieringDetailsWithDefaults

`func NewProfileCashieringDetailsWithDefaults() *ProfileCashieringDetails`

NewProfileCashieringDetailsWithDefaults instantiates a new ProfileCashieringDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *ProfileCashieringDetails) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ProfileCashieringDetails) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ProfileCashieringDetails) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ProfileCashieringDetails) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileCashieringDetailList

`func (o *ProfileCashieringDetails) GetProfileCashieringDetailList() []ProfileCashieringDetailType`

GetProfileCashieringDetailList returns the ProfileCashieringDetailList field if non-nil, zero value otherwise.

### GetProfileCashieringDetailListOk

`func (o *ProfileCashieringDetails) GetProfileCashieringDetailListOk() (*[]ProfileCashieringDetailType, bool)`

GetProfileCashieringDetailListOk returns a tuple with the ProfileCashieringDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCashieringDetailList

`func (o *ProfileCashieringDetails) SetProfileCashieringDetailList(v []ProfileCashieringDetailType)`

SetProfileCashieringDetailList sets ProfileCashieringDetailList field to given value.

### HasProfileCashieringDetailList

`func (o *ProfileCashieringDetails) HasProfileCashieringDetailList() bool`

HasProfileCashieringDetailList returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileCashieringDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileCashieringDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileCashieringDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileCashieringDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileCashieringDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileCashieringDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileCashieringDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileCashieringDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


