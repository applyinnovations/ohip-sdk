# CopyProfileCommissionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CommissionCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code from which the profile bank account and code belongs to | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**TargetHotelCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**ValidatePending** | Pointer to **bool** | Used in CRUD operations. When set to true, proceed validating pending commissions | [optional] 

## Methods

### NewCopyProfileCommissionInfoType

`func NewCopyProfileCommissionInfoType() *CopyProfileCommissionInfoType`

NewCopyProfileCommissionInfoType instantiates a new CopyProfileCommissionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyProfileCommissionInfoTypeWithDefaults

`func NewCopyProfileCommissionInfoTypeWithDefaults() *CopyProfileCommissionInfoType`

NewCopyProfileCommissionInfoTypeWithDefaults instantiates a new CopyProfileCommissionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBankAccountId

`func (o *CopyProfileCommissionInfoType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *CopyProfileCommissionInfoType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *CopyProfileCommissionInfoType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *CopyProfileCommissionInfoType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetCommissionCode

`func (o *CopyProfileCommissionInfoType) GetCommissionCode() CodeDescriptionType`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *CopyProfileCommissionInfoType) GetCommissionCodeOk() (*CodeDescriptionType, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *CopyProfileCommissionInfoType) SetCommissionCode(v CodeDescriptionType)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *CopyProfileCommissionInfoType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyProfileCommissionInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyProfileCommissionInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyProfileCommissionInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyProfileCommissionInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileId

`func (o *CopyProfileCommissionInfoType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *CopyProfileCommissionInfoType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *CopyProfileCommissionInfoType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *CopyProfileCommissionInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetTargetHotelCodes

`func (o *CopyProfileCommissionInfoType) GetTargetHotelCodes() CodeListType`

GetTargetHotelCodes returns the TargetHotelCodes field if non-nil, zero value otherwise.

### GetTargetHotelCodesOk

`func (o *CopyProfileCommissionInfoType) GetTargetHotelCodesOk() (*CodeListType, bool)`

GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCodes

`func (o *CopyProfileCommissionInfoType) SetTargetHotelCodes(v CodeListType)`

SetTargetHotelCodes sets TargetHotelCodes field to given value.

### HasTargetHotelCodes

`func (o *CopyProfileCommissionInfoType) HasTargetHotelCodes() bool`

HasTargetHotelCodes returns a boolean if a field has been set.

### GetValidatePending

`func (o *CopyProfileCommissionInfoType) GetValidatePending() bool`

GetValidatePending returns the ValidatePending field if non-nil, zero value otherwise.

### GetValidatePendingOk

`func (o *CopyProfileCommissionInfoType) GetValidatePendingOk() (*bool, bool)`

GetValidatePendingOk returns a tuple with the ValidatePending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidatePending

`func (o *CopyProfileCommissionInfoType) SetValidatePending(v bool)`

SetValidatePending sets ValidatePending field to given value.

### HasValidatePending

`func (o *CopyProfileCommissionInfoType) HasValidatePending() bool`

HasValidatePending returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


