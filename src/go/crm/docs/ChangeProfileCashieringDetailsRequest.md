# ChangeProfileCashieringDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProfileCashieringDetailList** | Pointer to [**[]ProfileCashieringDetailType**](ProfileCashieringDetailType.md) | Cashiering details for the profile. | [optional] 
**ProfileIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeProfileCashieringDetailsRequest

`func NewChangeProfileCashieringDetailsRequest() *ChangeProfileCashieringDetailsRequest`

NewChangeProfileCashieringDetailsRequest instantiates a new ChangeProfileCashieringDetailsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeProfileCashieringDetailsRequestWithDefaults

`func NewChangeProfileCashieringDetailsRequestWithDefaults() *ChangeProfileCashieringDetailsRequest`

NewChangeProfileCashieringDetailsRequestWithDefaults instantiates a new ChangeProfileCashieringDetailsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeProfileCashieringDetailsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeProfileCashieringDetailsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeProfileCashieringDetailsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeProfileCashieringDetailsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileCashieringDetailList

`func (o *ChangeProfileCashieringDetailsRequest) GetProfileCashieringDetailList() []ProfileCashieringDetailType`

GetProfileCashieringDetailList returns the ProfileCashieringDetailList field if non-nil, zero value otherwise.

### GetProfileCashieringDetailListOk

`func (o *ChangeProfileCashieringDetailsRequest) GetProfileCashieringDetailListOk() (*[]ProfileCashieringDetailType, bool)`

GetProfileCashieringDetailListOk returns a tuple with the ProfileCashieringDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCashieringDetailList

`func (o *ChangeProfileCashieringDetailsRequest) SetProfileCashieringDetailList(v []ProfileCashieringDetailType)`

SetProfileCashieringDetailList sets ProfileCashieringDetailList field to given value.

### HasProfileCashieringDetailList

`func (o *ChangeProfileCashieringDetailsRequest) HasProfileCashieringDetailList() bool`

HasProfileCashieringDetailList returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ChangeProfileCashieringDetailsRequest) GetProfileIdList() ProfileIdList`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ChangeProfileCashieringDetailsRequest) GetProfileIdListOk() (*ProfileIdList, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ChangeProfileCashieringDetailsRequest) SetProfileIdList(v ProfileIdList)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ChangeProfileCashieringDetailsRequest) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeProfileCashieringDetailsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeProfileCashieringDetailsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeProfileCashieringDetailsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeProfileCashieringDetailsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


