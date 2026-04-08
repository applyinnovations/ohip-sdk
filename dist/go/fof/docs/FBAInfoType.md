# FBAInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**FBAStatusType**](FBAStatusType.md) |  | [optional] 
**MonetaryValue** | Pointer to **float32** | Award&#39;s FBA monetary values. | [optional] 
**Amount** | Pointer to **float32** | Award&#39;s FBA amount. | [optional] 
**PostedAmount** | Pointer to **float32** | Award&#39;s FBA posted amount. | [optional] 
**ReimbursedAmount** | Pointer to **float32** | Award&#39;s FBA reimbursed amount. | [optional] 
**PostingDateTime** | Pointer to **string** | Date and time of the FBA posting. | [optional] 
**PostingBusinessDate** | Pointer to **string** | Business date of the FBA posting. | [optional] 
**SettlementDateTime** | Pointer to **string** | Date and time of the FBA settlement. | [optional] 
**SettlementBusinessDate** | Pointer to **string** | Business date of the FBA settlement. | [optional] 
**ReimbursementDateTime** | Pointer to **string** | Date and time of the FBA reimbursement. | [optional] 
**ReimbursementBusinessDate** | Pointer to **string** | Business date of the FBA reimbursement. | [optional] 
**FbaBillGenDate** | Pointer to **string** | Business date of the FBA bill generation. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**FlexibleBenefitAward** | Pointer to **bool** | Indicates if this certificate is a Flexible Benefit Award certificate. | [optional] 
**Posted** | Pointer to **bool** | Indicates whether FBA has been posted. | [optional] 
**Settled** | Pointer to **bool** | Indicates whether FBA has been settled. | [optional] 
**Reimbursed** | Pointer to **bool** | Indicates whether FBA has been reimbursed. | [optional] 
**ResettleAllowed** | Pointer to **bool** | Marks if the certificate is eligible for resettlement | [optional] 
**ReimburseAllowed** | Pointer to **bool** | Marks if the certificate is eligible for reimbursement. | [optional] 
**OrphanCertificate** | Pointer to **bool** | Indicates whether the certificate is Orphan or not. | [optional] 

## Methods

### NewFBAInfoType

`func NewFBAInfoType() *FBAInfoType`

NewFBAInfoType instantiates a new FBAInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFBAInfoTypeWithDefaults

`func NewFBAInfoTypeWithDefaults() *FBAInfoType`

NewFBAInfoTypeWithDefaults instantiates a new FBAInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *FBAInfoType) GetStatus() FBAStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FBAInfoType) GetStatusOk() (*FBAStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FBAInfoType) SetStatus(v FBAStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FBAInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMonetaryValue

`func (o *FBAInfoType) GetMonetaryValue() float32`

GetMonetaryValue returns the MonetaryValue field if non-nil, zero value otherwise.

### GetMonetaryValueOk

`func (o *FBAInfoType) GetMonetaryValueOk() (*float32, bool)`

GetMonetaryValueOk returns a tuple with the MonetaryValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonetaryValue

`func (o *FBAInfoType) SetMonetaryValue(v float32)`

SetMonetaryValue sets MonetaryValue field to given value.

### HasMonetaryValue

`func (o *FBAInfoType) HasMonetaryValue() bool`

HasMonetaryValue returns a boolean if a field has been set.

### GetAmount

`func (o *FBAInfoType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *FBAInfoType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *FBAInfoType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *FBAInfoType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPostedAmount

`func (o *FBAInfoType) GetPostedAmount() float32`

GetPostedAmount returns the PostedAmount field if non-nil, zero value otherwise.

### GetPostedAmountOk

`func (o *FBAInfoType) GetPostedAmountOk() (*float32, bool)`

GetPostedAmountOk returns a tuple with the PostedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedAmount

`func (o *FBAInfoType) SetPostedAmount(v float32)`

SetPostedAmount sets PostedAmount field to given value.

### HasPostedAmount

`func (o *FBAInfoType) HasPostedAmount() bool`

HasPostedAmount returns a boolean if a field has been set.

### GetReimbursedAmount

`func (o *FBAInfoType) GetReimbursedAmount() float32`

GetReimbursedAmount returns the ReimbursedAmount field if non-nil, zero value otherwise.

### GetReimbursedAmountOk

`func (o *FBAInfoType) GetReimbursedAmountOk() (*float32, bool)`

GetReimbursedAmountOk returns a tuple with the ReimbursedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursedAmount

`func (o *FBAInfoType) SetReimbursedAmount(v float32)`

SetReimbursedAmount sets ReimbursedAmount field to given value.

### HasReimbursedAmount

`func (o *FBAInfoType) HasReimbursedAmount() bool`

HasReimbursedAmount returns a boolean if a field has been set.

### GetPostingDateTime

`func (o *FBAInfoType) GetPostingDateTime() string`

GetPostingDateTime returns the PostingDateTime field if non-nil, zero value otherwise.

### GetPostingDateTimeOk

`func (o *FBAInfoType) GetPostingDateTimeOk() (*string, bool)`

GetPostingDateTimeOk returns a tuple with the PostingDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDateTime

`func (o *FBAInfoType) SetPostingDateTime(v string)`

SetPostingDateTime sets PostingDateTime field to given value.

### HasPostingDateTime

`func (o *FBAInfoType) HasPostingDateTime() bool`

HasPostingDateTime returns a boolean if a field has been set.

### GetPostingBusinessDate

`func (o *FBAInfoType) GetPostingBusinessDate() string`

GetPostingBusinessDate returns the PostingBusinessDate field if non-nil, zero value otherwise.

### GetPostingBusinessDateOk

`func (o *FBAInfoType) GetPostingBusinessDateOk() (*string, bool)`

GetPostingBusinessDateOk returns a tuple with the PostingBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingBusinessDate

`func (o *FBAInfoType) SetPostingBusinessDate(v string)`

SetPostingBusinessDate sets PostingBusinessDate field to given value.

### HasPostingBusinessDate

`func (o *FBAInfoType) HasPostingBusinessDate() bool`

HasPostingBusinessDate returns a boolean if a field has been set.

### GetSettlementDateTime

`func (o *FBAInfoType) GetSettlementDateTime() string`

GetSettlementDateTime returns the SettlementDateTime field if non-nil, zero value otherwise.

### GetSettlementDateTimeOk

`func (o *FBAInfoType) GetSettlementDateTimeOk() (*string, bool)`

GetSettlementDateTimeOk returns a tuple with the SettlementDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementDateTime

`func (o *FBAInfoType) SetSettlementDateTime(v string)`

SetSettlementDateTime sets SettlementDateTime field to given value.

### HasSettlementDateTime

`func (o *FBAInfoType) HasSettlementDateTime() bool`

HasSettlementDateTime returns a boolean if a field has been set.

### GetSettlementBusinessDate

`func (o *FBAInfoType) GetSettlementBusinessDate() string`

GetSettlementBusinessDate returns the SettlementBusinessDate field if non-nil, zero value otherwise.

### GetSettlementBusinessDateOk

`func (o *FBAInfoType) GetSettlementBusinessDateOk() (*string, bool)`

GetSettlementBusinessDateOk returns a tuple with the SettlementBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBusinessDate

`func (o *FBAInfoType) SetSettlementBusinessDate(v string)`

SetSettlementBusinessDate sets SettlementBusinessDate field to given value.

### HasSettlementBusinessDate

`func (o *FBAInfoType) HasSettlementBusinessDate() bool`

HasSettlementBusinessDate returns a boolean if a field has been set.

### GetReimbursementDateTime

`func (o *FBAInfoType) GetReimbursementDateTime() string`

GetReimbursementDateTime returns the ReimbursementDateTime field if non-nil, zero value otherwise.

### GetReimbursementDateTimeOk

`func (o *FBAInfoType) GetReimbursementDateTimeOk() (*string, bool)`

GetReimbursementDateTimeOk returns a tuple with the ReimbursementDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursementDateTime

`func (o *FBAInfoType) SetReimbursementDateTime(v string)`

SetReimbursementDateTime sets ReimbursementDateTime field to given value.

### HasReimbursementDateTime

`func (o *FBAInfoType) HasReimbursementDateTime() bool`

HasReimbursementDateTime returns a boolean if a field has been set.

### GetReimbursementBusinessDate

`func (o *FBAInfoType) GetReimbursementBusinessDate() string`

GetReimbursementBusinessDate returns the ReimbursementBusinessDate field if non-nil, zero value otherwise.

### GetReimbursementBusinessDateOk

`func (o *FBAInfoType) GetReimbursementBusinessDateOk() (*string, bool)`

GetReimbursementBusinessDateOk returns a tuple with the ReimbursementBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursementBusinessDate

`func (o *FBAInfoType) SetReimbursementBusinessDate(v string)`

SetReimbursementBusinessDate sets ReimbursementBusinessDate field to given value.

### HasReimbursementBusinessDate

`func (o *FBAInfoType) HasReimbursementBusinessDate() bool`

HasReimbursementBusinessDate returns a boolean if a field has been set.

### GetFbaBillGenDate

`func (o *FBAInfoType) GetFbaBillGenDate() string`

GetFbaBillGenDate returns the FbaBillGenDate field if non-nil, zero value otherwise.

### GetFbaBillGenDateOk

`func (o *FBAInfoType) GetFbaBillGenDateOk() (*string, bool)`

GetFbaBillGenDateOk returns a tuple with the FbaBillGenDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFbaBillGenDate

`func (o *FBAInfoType) SetFbaBillGenDate(v string)`

SetFbaBillGenDate sets FbaBillGenDate field to given value.

### HasFbaBillGenDate

`func (o *FBAInfoType) HasFbaBillGenDate() bool`

HasFbaBillGenDate returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *FBAInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *FBAInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *FBAInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *FBAInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *FBAInfoType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *FBAInfoType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *FBAInfoType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *FBAInfoType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *FBAInfoType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *FBAInfoType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *FBAInfoType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *FBAInfoType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetFlexibleBenefitAward

`func (o *FBAInfoType) GetFlexibleBenefitAward() bool`

GetFlexibleBenefitAward returns the FlexibleBenefitAward field if non-nil, zero value otherwise.

### GetFlexibleBenefitAwardOk

`func (o *FBAInfoType) GetFlexibleBenefitAwardOk() (*bool, bool)`

GetFlexibleBenefitAwardOk returns a tuple with the FlexibleBenefitAward field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexibleBenefitAward

`func (o *FBAInfoType) SetFlexibleBenefitAward(v bool)`

SetFlexibleBenefitAward sets FlexibleBenefitAward field to given value.

### HasFlexibleBenefitAward

`func (o *FBAInfoType) HasFlexibleBenefitAward() bool`

HasFlexibleBenefitAward returns a boolean if a field has been set.

### GetPosted

`func (o *FBAInfoType) GetPosted() bool`

GetPosted returns the Posted field if non-nil, zero value otherwise.

### GetPostedOk

`func (o *FBAInfoType) GetPostedOk() (*bool, bool)`

GetPostedOk returns a tuple with the Posted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosted

`func (o *FBAInfoType) SetPosted(v bool)`

SetPosted sets Posted field to given value.

### HasPosted

`func (o *FBAInfoType) HasPosted() bool`

HasPosted returns a boolean if a field has been set.

### GetSettled

`func (o *FBAInfoType) GetSettled() bool`

GetSettled returns the Settled field if non-nil, zero value otherwise.

### GetSettledOk

`func (o *FBAInfoType) GetSettledOk() (*bool, bool)`

GetSettledOk returns a tuple with the Settled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettled

`func (o *FBAInfoType) SetSettled(v bool)`

SetSettled sets Settled field to given value.

### HasSettled

`func (o *FBAInfoType) HasSettled() bool`

HasSettled returns a boolean if a field has been set.

### GetReimbursed

`func (o *FBAInfoType) GetReimbursed() bool`

GetReimbursed returns the Reimbursed field if non-nil, zero value otherwise.

### GetReimbursedOk

`func (o *FBAInfoType) GetReimbursedOk() (*bool, bool)`

GetReimbursedOk returns a tuple with the Reimbursed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursed

`func (o *FBAInfoType) SetReimbursed(v bool)`

SetReimbursed sets Reimbursed field to given value.

### HasReimbursed

`func (o *FBAInfoType) HasReimbursed() bool`

HasReimbursed returns a boolean if a field has been set.

### GetResettleAllowed

`func (o *FBAInfoType) GetResettleAllowed() bool`

GetResettleAllowed returns the ResettleAllowed field if non-nil, zero value otherwise.

### GetResettleAllowedOk

`func (o *FBAInfoType) GetResettleAllowedOk() (*bool, bool)`

GetResettleAllowedOk returns a tuple with the ResettleAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResettleAllowed

`func (o *FBAInfoType) SetResettleAllowed(v bool)`

SetResettleAllowed sets ResettleAllowed field to given value.

### HasResettleAllowed

`func (o *FBAInfoType) HasResettleAllowed() bool`

HasResettleAllowed returns a boolean if a field has been set.

### GetReimburseAllowed

`func (o *FBAInfoType) GetReimburseAllowed() bool`

GetReimburseAllowed returns the ReimburseAllowed field if non-nil, zero value otherwise.

### GetReimburseAllowedOk

`func (o *FBAInfoType) GetReimburseAllowedOk() (*bool, bool)`

GetReimburseAllowedOk returns a tuple with the ReimburseAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimburseAllowed

`func (o *FBAInfoType) SetReimburseAllowed(v bool)`

SetReimburseAllowed sets ReimburseAllowed field to given value.

### HasReimburseAllowed

`func (o *FBAInfoType) HasReimburseAllowed() bool`

HasReimburseAllowed returns a boolean if a field has been set.

### GetOrphanCertificate

`func (o *FBAInfoType) GetOrphanCertificate() bool`

GetOrphanCertificate returns the OrphanCertificate field if non-nil, zero value otherwise.

### GetOrphanCertificateOk

`func (o *FBAInfoType) GetOrphanCertificateOk() (*bool, bool)`

GetOrphanCertificateOk returns a tuple with the OrphanCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrphanCertificate

`func (o *FBAInfoType) SetOrphanCertificate(v bool)`

SetOrphanCertificate sets OrphanCertificate field to given value.

### HasOrphanCertificate

`func (o *FBAInfoType) HasOrphanCertificate() bool`

HasOrphanCertificate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


