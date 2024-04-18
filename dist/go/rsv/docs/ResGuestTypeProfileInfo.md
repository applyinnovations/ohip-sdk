# ResGuestTypeProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalReference** | Pointer to [**ExternalReferenceType**](ExternalReferenceType.md) |  | [optional] 
**Profile** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ProfileCashieringDetail** | Pointer to [**ProfileCashieringDetailType**](ProfileCashieringDetailType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**RegistrationCardNo** | Pointer to **string** | Unique identifier of the police registration card number. | [optional] 

## Methods

### NewResGuestTypeProfileInfo

`func NewResGuestTypeProfileInfo() *ResGuestTypeProfileInfo`

NewResGuestTypeProfileInfo instantiates a new ResGuestTypeProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResGuestTypeProfileInfoWithDefaults

`func NewResGuestTypeProfileInfoWithDefaults() *ResGuestTypeProfileInfo`

NewResGuestTypeProfileInfoWithDefaults instantiates a new ResGuestTypeProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalReference

`func (o *ResGuestTypeProfileInfo) GetExternalReference() ExternalReferenceType`

GetExternalReference returns the ExternalReference field if non-nil, zero value otherwise.

### GetExternalReferenceOk

`func (o *ResGuestTypeProfileInfo) GetExternalReferenceOk() (*ExternalReferenceType, bool)`

GetExternalReferenceOk returns a tuple with the ExternalReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReference

`func (o *ResGuestTypeProfileInfo) SetExternalReference(v ExternalReferenceType)`

SetExternalReference sets ExternalReference field to given value.

### HasExternalReference

`func (o *ResGuestTypeProfileInfo) HasExternalReference() bool`

HasExternalReference returns a boolean if a field has been set.

### GetProfile

`func (o *ResGuestTypeProfileInfo) GetProfile() ProfileType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ResGuestTypeProfileInfo) GetProfileOk() (*ProfileType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ResGuestTypeProfileInfo) SetProfile(v ProfileType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ResGuestTypeProfileInfo) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetProfileCashieringDetail

`func (o *ResGuestTypeProfileInfo) GetProfileCashieringDetail() ProfileCashieringDetailType`

GetProfileCashieringDetail returns the ProfileCashieringDetail field if non-nil, zero value otherwise.

### GetProfileCashieringDetailOk

`func (o *ResGuestTypeProfileInfo) GetProfileCashieringDetailOk() (*ProfileCashieringDetailType, bool)`

GetProfileCashieringDetailOk returns a tuple with the ProfileCashieringDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCashieringDetail

`func (o *ResGuestTypeProfileInfo) SetProfileCashieringDetail(v ProfileCashieringDetailType)`

SetProfileCashieringDetail sets ProfileCashieringDetail field to given value.

### HasProfileCashieringDetail

`func (o *ResGuestTypeProfileInfo) HasProfileCashieringDetail() bool`

HasProfileCashieringDetail returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ResGuestTypeProfileInfo) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ResGuestTypeProfileInfo) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ResGuestTypeProfileInfo) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ResGuestTypeProfileInfo) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetRegistrationCardNo

`func (o *ResGuestTypeProfileInfo) GetRegistrationCardNo() string`

GetRegistrationCardNo returns the RegistrationCardNo field if non-nil, zero value otherwise.

### GetRegistrationCardNoOk

`func (o *ResGuestTypeProfileInfo) GetRegistrationCardNoOk() (*string, bool)`

GetRegistrationCardNoOk returns a tuple with the RegistrationCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationCardNo

`func (o *ResGuestTypeProfileInfo) SetRegistrationCardNo(v string)`

SetRegistrationCardNo sets RegistrationCardNo field to given value.

### HasRegistrationCardNo

`func (o *ResGuestTypeProfileInfo) HasRegistrationCardNo() bool`

HasRegistrationCardNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


