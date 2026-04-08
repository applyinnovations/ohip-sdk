# ProfileCommissionAccountCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code from which the profile bank account and code belongs to | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CommissionCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ValidatePending** | Pointer to **bool** | Used in CRUD operations. When set to true, proceed validating pending commissions | [optional] 

## Methods

### NewProfileCommissionAccountCriteriaType

`func NewProfileCommissionAccountCriteriaType() *ProfileCommissionAccountCriteriaType`

NewProfileCommissionAccountCriteriaType instantiates a new ProfileCommissionAccountCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCommissionAccountCriteriaTypeWithDefaults

`func NewProfileCommissionAccountCriteriaTypeWithDefaults() *ProfileCommissionAccountCriteriaType`

NewProfileCommissionAccountCriteriaTypeWithDefaults instantiates a new ProfileCommissionAccountCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ProfileCommissionAccountCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileCommissionAccountCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileCommissionAccountCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProfileCommissionAccountCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileId

`func (o *ProfileCommissionAccountCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ProfileCommissionAccountCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ProfileCommissionAccountCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ProfileCommissionAccountCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetBankAccountId

`func (o *ProfileCommissionAccountCriteriaType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *ProfileCommissionAccountCriteriaType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *ProfileCommissionAccountCriteriaType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *ProfileCommissionAccountCriteriaType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetCommissionCode

`func (o *ProfileCommissionAccountCriteriaType) GetCommissionCode() CodeDescriptionType`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *ProfileCommissionAccountCriteriaType) GetCommissionCodeOk() (*CodeDescriptionType, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *ProfileCommissionAccountCriteriaType) SetCommissionCode(v CodeDescriptionType)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *ProfileCommissionAccountCriteriaType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetValidatePending

`func (o *ProfileCommissionAccountCriteriaType) GetValidatePending() bool`

GetValidatePending returns the ValidatePending field if non-nil, zero value otherwise.

### GetValidatePendingOk

`func (o *ProfileCommissionAccountCriteriaType) GetValidatePendingOk() (*bool, bool)`

GetValidatePendingOk returns a tuple with the ValidatePending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidatePending

`func (o *ProfileCommissionAccountCriteriaType) SetValidatePending(v bool)`

SetValidatePending sets ValidatePending field to given value.

### HasValidatePending

`func (o *ProfileCommissionAccountCriteriaType) HasValidatePending() bool`

HasValidatePending returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


