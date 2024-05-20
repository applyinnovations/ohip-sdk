# ProfileCashieringType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DirectBillingList** | Pointer to [**[]DirectBillingType**](DirectBillingType.md) | Contains the direct billing related information for the profile. | [optional] 
**AutoFolioSettlementType** | Pointer to **string** | Contains the auto folio settlement type for the profile. | [optional] 
**PaymentDueDays** | Pointer to **int32** | Ability to define on the account, the number of days after which the invoice should be paid. | [optional] 
**TaxPercent1** | Pointer to **int32** | Tax1 Percentage for Collecting Agent. | [optional] 
**TaxPercent2** | Pointer to **int32** | Tax2 Percentage for Collecting Agent. | [optional] 
**TaxPercent3** | Pointer to **int32** | Tax3 Percentage for Collecting Agent. | [optional] 
**TaxPercent4** | Pointer to **int32** | Tax4 Percentage for Collecting Agent. | [optional] 
**TaxPercent5** | Pointer to **int32** | Tax5 Percentage for Collecting Agent. | [optional] 
**ArNoCentral** | Pointer to **string** | Account Receivables Central Number. | [optional] 
**ReferenceCurrency** | Pointer to **string** | Reference Currency. | [optional] 
**VATOffsetYN** | Pointer to **string** | VAT Offset Flag. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 

## Methods

### NewProfileCashieringType

`func NewProfileCashieringType() *ProfileCashieringType`

NewProfileCashieringType instantiates a new ProfileCashieringType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCashieringTypeWithDefaults

`func NewProfileCashieringTypeWithDefaults() *ProfileCashieringType`

NewProfileCashieringTypeWithDefaults instantiates a new ProfileCashieringType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDirectBillingList

`func (o *ProfileCashieringType) GetDirectBillingList() []DirectBillingType`

GetDirectBillingList returns the DirectBillingList field if non-nil, zero value otherwise.

### GetDirectBillingListOk

`func (o *ProfileCashieringType) GetDirectBillingListOk() (*[]DirectBillingType, bool)`

GetDirectBillingListOk returns a tuple with the DirectBillingList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectBillingList

`func (o *ProfileCashieringType) SetDirectBillingList(v []DirectBillingType)`

SetDirectBillingList sets DirectBillingList field to given value.

### HasDirectBillingList

`func (o *ProfileCashieringType) HasDirectBillingList() bool`

HasDirectBillingList returns a boolean if a field has been set.

### GetAutoFolioSettlementType

`func (o *ProfileCashieringType) GetAutoFolioSettlementType() string`

GetAutoFolioSettlementType returns the AutoFolioSettlementType field if non-nil, zero value otherwise.

### GetAutoFolioSettlementTypeOk

`func (o *ProfileCashieringType) GetAutoFolioSettlementTypeOk() (*string, bool)`

GetAutoFolioSettlementTypeOk returns a tuple with the AutoFolioSettlementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoFolioSettlementType

`func (o *ProfileCashieringType) SetAutoFolioSettlementType(v string)`

SetAutoFolioSettlementType sets AutoFolioSettlementType field to given value.

### HasAutoFolioSettlementType

`func (o *ProfileCashieringType) HasAutoFolioSettlementType() bool`

HasAutoFolioSettlementType returns a boolean if a field has been set.

### GetPaymentDueDays

`func (o *ProfileCashieringType) GetPaymentDueDays() int32`

GetPaymentDueDays returns the PaymentDueDays field if non-nil, zero value otherwise.

### GetPaymentDueDaysOk

`func (o *ProfileCashieringType) GetPaymentDueDaysOk() (*int32, bool)`

GetPaymentDueDaysOk returns a tuple with the PaymentDueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDueDays

`func (o *ProfileCashieringType) SetPaymentDueDays(v int32)`

SetPaymentDueDays sets PaymentDueDays field to given value.

### HasPaymentDueDays

`func (o *ProfileCashieringType) HasPaymentDueDays() bool`

HasPaymentDueDays returns a boolean if a field has been set.

### GetTaxPercent1

`func (o *ProfileCashieringType) GetTaxPercent1() int32`

GetTaxPercent1 returns the TaxPercent1 field if non-nil, zero value otherwise.

### GetTaxPercent1Ok

`func (o *ProfileCashieringType) GetTaxPercent1Ok() (*int32, bool)`

GetTaxPercent1Ok returns a tuple with the TaxPercent1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercent1

`func (o *ProfileCashieringType) SetTaxPercent1(v int32)`

SetTaxPercent1 sets TaxPercent1 field to given value.

### HasTaxPercent1

`func (o *ProfileCashieringType) HasTaxPercent1() bool`

HasTaxPercent1 returns a boolean if a field has been set.

### GetTaxPercent2

`func (o *ProfileCashieringType) GetTaxPercent2() int32`

GetTaxPercent2 returns the TaxPercent2 field if non-nil, zero value otherwise.

### GetTaxPercent2Ok

`func (o *ProfileCashieringType) GetTaxPercent2Ok() (*int32, bool)`

GetTaxPercent2Ok returns a tuple with the TaxPercent2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercent2

`func (o *ProfileCashieringType) SetTaxPercent2(v int32)`

SetTaxPercent2 sets TaxPercent2 field to given value.

### HasTaxPercent2

`func (o *ProfileCashieringType) HasTaxPercent2() bool`

HasTaxPercent2 returns a boolean if a field has been set.

### GetTaxPercent3

`func (o *ProfileCashieringType) GetTaxPercent3() int32`

GetTaxPercent3 returns the TaxPercent3 field if non-nil, zero value otherwise.

### GetTaxPercent3Ok

`func (o *ProfileCashieringType) GetTaxPercent3Ok() (*int32, bool)`

GetTaxPercent3Ok returns a tuple with the TaxPercent3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercent3

`func (o *ProfileCashieringType) SetTaxPercent3(v int32)`

SetTaxPercent3 sets TaxPercent3 field to given value.

### HasTaxPercent3

`func (o *ProfileCashieringType) HasTaxPercent3() bool`

HasTaxPercent3 returns a boolean if a field has been set.

### GetTaxPercent4

`func (o *ProfileCashieringType) GetTaxPercent4() int32`

GetTaxPercent4 returns the TaxPercent4 field if non-nil, zero value otherwise.

### GetTaxPercent4Ok

`func (o *ProfileCashieringType) GetTaxPercent4Ok() (*int32, bool)`

GetTaxPercent4Ok returns a tuple with the TaxPercent4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercent4

`func (o *ProfileCashieringType) SetTaxPercent4(v int32)`

SetTaxPercent4 sets TaxPercent4 field to given value.

### HasTaxPercent4

`func (o *ProfileCashieringType) HasTaxPercent4() bool`

HasTaxPercent4 returns a boolean if a field has been set.

### GetTaxPercent5

`func (o *ProfileCashieringType) GetTaxPercent5() int32`

GetTaxPercent5 returns the TaxPercent5 field if non-nil, zero value otherwise.

### GetTaxPercent5Ok

`func (o *ProfileCashieringType) GetTaxPercent5Ok() (*int32, bool)`

GetTaxPercent5Ok returns a tuple with the TaxPercent5 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercent5

`func (o *ProfileCashieringType) SetTaxPercent5(v int32)`

SetTaxPercent5 sets TaxPercent5 field to given value.

### HasTaxPercent5

`func (o *ProfileCashieringType) HasTaxPercent5() bool`

HasTaxPercent5 returns a boolean if a field has been set.

### GetArNoCentral

`func (o *ProfileCashieringType) GetArNoCentral() string`

GetArNoCentral returns the ArNoCentral field if non-nil, zero value otherwise.

### GetArNoCentralOk

`func (o *ProfileCashieringType) GetArNoCentralOk() (*string, bool)`

GetArNoCentralOk returns a tuple with the ArNoCentral field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArNoCentral

`func (o *ProfileCashieringType) SetArNoCentral(v string)`

SetArNoCentral sets ArNoCentral field to given value.

### HasArNoCentral

`func (o *ProfileCashieringType) HasArNoCentral() bool`

HasArNoCentral returns a boolean if a field has been set.

### GetReferenceCurrency

`func (o *ProfileCashieringType) GetReferenceCurrency() string`

GetReferenceCurrency returns the ReferenceCurrency field if non-nil, zero value otherwise.

### GetReferenceCurrencyOk

`func (o *ProfileCashieringType) GetReferenceCurrencyOk() (*string, bool)`

GetReferenceCurrencyOk returns a tuple with the ReferenceCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceCurrency

`func (o *ProfileCashieringType) SetReferenceCurrency(v string)`

SetReferenceCurrency sets ReferenceCurrency field to given value.

### HasReferenceCurrency

`func (o *ProfileCashieringType) HasReferenceCurrency() bool`

HasReferenceCurrency returns a boolean if a field has been set.

### GetVATOffsetYN

`func (o *ProfileCashieringType) GetVATOffsetYN() string`

GetVATOffsetYN returns the VATOffsetYN field if non-nil, zero value otherwise.

### GetVATOffsetYNOk

`func (o *ProfileCashieringType) GetVATOffsetYNOk() (*string, bool)`

GetVATOffsetYNOk returns a tuple with the VATOffsetYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVATOffsetYN

`func (o *ProfileCashieringType) SetVATOffsetYN(v string)`

SetVATOffsetYN sets VATOffsetYN field to given value.

### HasVATOffsetYN

`func (o *ProfileCashieringType) HasVATOffsetYN() bool`

HasVATOffsetYN returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ProfileCashieringType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ProfileCashieringType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ProfileCashieringType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ProfileCashieringType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *ProfileCashieringType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *ProfileCashieringType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *ProfileCashieringType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *ProfileCashieringType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *ProfileCashieringType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *ProfileCashieringType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *ProfileCashieringType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *ProfileCashieringType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


