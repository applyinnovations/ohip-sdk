# BankAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BankAccountNo** | Pointer to **string** | Account number at the bank. | [optional] 
**BankCode** | Pointer to **string** | Unique code of the bank account. | [optional] 
**BankName** | Pointer to **string** | Name of the bank account. | [optional] 
**BranchCode** | Pointer to **string** | Code for the branch of the bank. | [optional] 
**CheckFormat** | Pointer to **string** | Type of format for Payment Method. | [optional] 
**Currency** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**CurrentCheckNo** | Pointer to **float32** | Current check no of the bank account. | [optional] 
**Default** | Pointer to **bool** | Whether this bank account is to be the default in case no bank account is associated with the travel agent or source. | [optional] 
**HotelId** | Pointer to **string** | Property of the bank account. | [optional] 
**HotelName** | Pointer to **string** | Property name of the bank account. | [optional] 
**LinkedToProfile** | Pointer to **bool** | Whether this bank account is associated with the travel agent or source. | [optional] 
**PaymentMethod** | Pointer to [**CommissionPaymentMethodType**](CommissionPaymentMethodType.md) |  | [optional] 

## Methods

### NewBankAccountType

`func NewBankAccountType() *BankAccountType`

NewBankAccountType instantiates a new BankAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankAccountTypeWithDefaults

`func NewBankAccountTypeWithDefaults() *BankAccountType`

NewBankAccountTypeWithDefaults instantiates a new BankAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBankAccountId

`func (o *BankAccountType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *BankAccountType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *BankAccountType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *BankAccountType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetBankAccountNo

`func (o *BankAccountType) GetBankAccountNo() string`

GetBankAccountNo returns the BankAccountNo field if non-nil, zero value otherwise.

### GetBankAccountNoOk

`func (o *BankAccountType) GetBankAccountNoOk() (*string, bool)`

GetBankAccountNoOk returns a tuple with the BankAccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountNo

`func (o *BankAccountType) SetBankAccountNo(v string)`

SetBankAccountNo sets BankAccountNo field to given value.

### HasBankAccountNo

`func (o *BankAccountType) HasBankAccountNo() bool`

HasBankAccountNo returns a boolean if a field has been set.

### GetBankCode

`func (o *BankAccountType) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *BankAccountType) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *BankAccountType) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.

### HasBankCode

`func (o *BankAccountType) HasBankCode() bool`

HasBankCode returns a boolean if a field has been set.

### GetBankName

`func (o *BankAccountType) GetBankName() string`

GetBankName returns the BankName field if non-nil, zero value otherwise.

### GetBankNameOk

`func (o *BankAccountType) GetBankNameOk() (*string, bool)`

GetBankNameOk returns a tuple with the BankName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankName

`func (o *BankAccountType) SetBankName(v string)`

SetBankName sets BankName field to given value.

### HasBankName

`func (o *BankAccountType) HasBankName() bool`

HasBankName returns a boolean if a field has been set.

### GetBranchCode

`func (o *BankAccountType) GetBranchCode() string`

GetBranchCode returns the BranchCode field if non-nil, zero value otherwise.

### GetBranchCodeOk

`func (o *BankAccountType) GetBranchCodeOk() (*string, bool)`

GetBranchCodeOk returns a tuple with the BranchCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranchCode

`func (o *BankAccountType) SetBranchCode(v string)`

SetBranchCode sets BranchCode field to given value.

### HasBranchCode

`func (o *BankAccountType) HasBranchCode() bool`

HasBranchCode returns a boolean if a field has been set.

### GetCheckFormat

`func (o *BankAccountType) GetCheckFormat() string`

GetCheckFormat returns the CheckFormat field if non-nil, zero value otherwise.

### GetCheckFormatOk

`func (o *BankAccountType) GetCheckFormatOk() (*string, bool)`

GetCheckFormatOk returns a tuple with the CheckFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckFormat

`func (o *BankAccountType) SetCheckFormat(v string)`

SetCheckFormat sets CheckFormat field to given value.

### HasCheckFormat

`func (o *BankAccountType) HasCheckFormat() bool`

HasCheckFormat returns a boolean if a field has been set.

### GetCurrency

`func (o *BankAccountType) GetCurrency() CodeDescriptionType`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *BankAccountType) GetCurrencyOk() (*CodeDescriptionType, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *BankAccountType) SetCurrency(v CodeDescriptionType)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *BankAccountType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCurrentCheckNo

`func (o *BankAccountType) GetCurrentCheckNo() float32`

GetCurrentCheckNo returns the CurrentCheckNo field if non-nil, zero value otherwise.

### GetCurrentCheckNoOk

`func (o *BankAccountType) GetCurrentCheckNoOk() (*float32, bool)`

GetCurrentCheckNoOk returns a tuple with the CurrentCheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentCheckNo

`func (o *BankAccountType) SetCurrentCheckNo(v float32)`

SetCurrentCheckNo sets CurrentCheckNo field to given value.

### HasCurrentCheckNo

`func (o *BankAccountType) HasCurrentCheckNo() bool`

HasCurrentCheckNo returns a boolean if a field has been set.

### GetDefault

`func (o *BankAccountType) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *BankAccountType) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *BankAccountType) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *BankAccountType) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetHotelId

`func (o *BankAccountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BankAccountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BankAccountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BankAccountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *BankAccountType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *BankAccountType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *BankAccountType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *BankAccountType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetLinkedToProfile

`func (o *BankAccountType) GetLinkedToProfile() bool`

GetLinkedToProfile returns the LinkedToProfile field if non-nil, zero value otherwise.

### GetLinkedToProfileOk

`func (o *BankAccountType) GetLinkedToProfileOk() (*bool, bool)`

GetLinkedToProfileOk returns a tuple with the LinkedToProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedToProfile

`func (o *BankAccountType) SetLinkedToProfile(v bool)`

SetLinkedToProfile sets LinkedToProfile field to given value.

### HasLinkedToProfile

`func (o *BankAccountType) HasLinkedToProfile() bool`

HasLinkedToProfile returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *BankAccountType) GetPaymentMethod() CommissionPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *BankAccountType) GetPaymentMethodOk() (*CommissionPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *BankAccountType) SetPaymentMethod(v CommissionPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *BankAccountType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


