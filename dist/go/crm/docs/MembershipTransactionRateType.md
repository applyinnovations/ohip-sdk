# MembershipTransactionRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CentralRateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Currency** | Pointer to **string** | Indicates the Property currency code. | [optional] 
**FromDate** | Pointer to **string** | Indicates start date of the reservation. | [optional] 
**MarketCode** | Pointer to **string** | Indicates the Market code linked to rate code. | [optional] 
**PMSRateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RateCode** | Pointer to **string** | Indicates the Rate code used in the reservation. | [optional] 
**ToDate** | Pointer to **string** | Indicates end date of the reservation. | [optional] 

## Methods

### NewMembershipTransactionRateType

`func NewMembershipTransactionRateType() *MembershipTransactionRateType`

NewMembershipTransactionRateType instantiates a new MembershipTransactionRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionRateTypeWithDefaults

`func NewMembershipTransactionRateTypeWithDefaults() *MembershipTransactionRateType`

NewMembershipTransactionRateTypeWithDefaults instantiates a new MembershipTransactionRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCentralRateAmount

`func (o *MembershipTransactionRateType) GetCentralRateAmount() CurrencyAmountType`

GetCentralRateAmount returns the CentralRateAmount field if non-nil, zero value otherwise.

### GetCentralRateAmountOk

`func (o *MembershipTransactionRateType) GetCentralRateAmountOk() (*CurrencyAmountType, bool)`

GetCentralRateAmountOk returns a tuple with the CentralRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralRateAmount

`func (o *MembershipTransactionRateType) SetCentralRateAmount(v CurrencyAmountType)`

SetCentralRateAmount sets CentralRateAmount field to given value.

### HasCentralRateAmount

`func (o *MembershipTransactionRateType) HasCentralRateAmount() bool`

HasCentralRateAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *MembershipTransactionRateType) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *MembershipTransactionRateType) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *MembershipTransactionRateType) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *MembershipTransactionRateType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetFromDate

`func (o *MembershipTransactionRateType) GetFromDate() string`

GetFromDate returns the FromDate field if non-nil, zero value otherwise.

### GetFromDateOk

`func (o *MembershipTransactionRateType) GetFromDateOk() (*string, bool)`

GetFromDateOk returns a tuple with the FromDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromDate

`func (o *MembershipTransactionRateType) SetFromDate(v string)`

SetFromDate sets FromDate field to given value.

### HasFromDate

`func (o *MembershipTransactionRateType) HasFromDate() bool`

HasFromDate returns a boolean if a field has been set.

### GetMarketCode

`func (o *MembershipTransactionRateType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *MembershipTransactionRateType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *MembershipTransactionRateType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *MembershipTransactionRateType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetPMSRateAmount

`func (o *MembershipTransactionRateType) GetPMSRateAmount() CurrencyAmountType`

GetPMSRateAmount returns the PMSRateAmount field if non-nil, zero value otherwise.

### GetPMSRateAmountOk

`func (o *MembershipTransactionRateType) GetPMSRateAmountOk() (*CurrencyAmountType, bool)`

GetPMSRateAmountOk returns a tuple with the PMSRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPMSRateAmount

`func (o *MembershipTransactionRateType) SetPMSRateAmount(v CurrencyAmountType)`

SetPMSRateAmount sets PMSRateAmount field to given value.

### HasPMSRateAmount

`func (o *MembershipTransactionRateType) HasPMSRateAmount() bool`

HasPMSRateAmount returns a boolean if a field has been set.

### GetRateCode

`func (o *MembershipTransactionRateType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *MembershipTransactionRateType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *MembershipTransactionRateType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *MembershipTransactionRateType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetToDate

`func (o *MembershipTransactionRateType) GetToDate() string`

GetToDate returns the ToDate field if non-nil, zero value otherwise.

### GetToDateOk

`func (o *MembershipTransactionRateType) GetToDateOk() (*string, bool)`

GetToDateOk returns a tuple with the ToDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToDate

`func (o *MembershipTransactionRateType) SetToDate(v string)`

SetToDate sets ToDate field to given value.

### HasToDate

`func (o *MembershipTransactionRateType) HasToDate() bool`

HasToDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


