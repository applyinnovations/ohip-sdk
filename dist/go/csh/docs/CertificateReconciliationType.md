# CertificateReconciliationType

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
**HotelId** | Pointer to **string** | Hotel context for the selected certificate. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**FBAStatus** | Pointer to [**FBAStatusType**](FBAStatusType.md) |  | [optional] 
**CertificateNumber** | Pointer to **string** | The number for the given certificate. | [optional] 

## Methods

### NewCertificateReconciliationType

`func NewCertificateReconciliationType() *CertificateReconciliationType`

NewCertificateReconciliationType instantiates a new CertificateReconciliationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateReconciliationTypeWithDefaults

`func NewCertificateReconciliationTypeWithDefaults() *CertificateReconciliationType`

NewCertificateReconciliationTypeWithDefaults instantiates a new CertificateReconciliationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CertificateReconciliationType) GetStatus() FBAStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CertificateReconciliationType) GetStatusOk() (*FBAStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CertificateReconciliationType) SetStatus(v FBAStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CertificateReconciliationType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMonetaryValue

`func (o *CertificateReconciliationType) GetMonetaryValue() float32`

GetMonetaryValue returns the MonetaryValue field if non-nil, zero value otherwise.

### GetMonetaryValueOk

`func (o *CertificateReconciliationType) GetMonetaryValueOk() (*float32, bool)`

GetMonetaryValueOk returns a tuple with the MonetaryValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonetaryValue

`func (o *CertificateReconciliationType) SetMonetaryValue(v float32)`

SetMonetaryValue sets MonetaryValue field to given value.

### HasMonetaryValue

`func (o *CertificateReconciliationType) HasMonetaryValue() bool`

HasMonetaryValue returns a boolean if a field has been set.

### GetAmount

`func (o *CertificateReconciliationType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CertificateReconciliationType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CertificateReconciliationType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CertificateReconciliationType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPostedAmount

`func (o *CertificateReconciliationType) GetPostedAmount() float32`

GetPostedAmount returns the PostedAmount field if non-nil, zero value otherwise.

### GetPostedAmountOk

`func (o *CertificateReconciliationType) GetPostedAmountOk() (*float32, bool)`

GetPostedAmountOk returns a tuple with the PostedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedAmount

`func (o *CertificateReconciliationType) SetPostedAmount(v float32)`

SetPostedAmount sets PostedAmount field to given value.

### HasPostedAmount

`func (o *CertificateReconciliationType) HasPostedAmount() bool`

HasPostedAmount returns a boolean if a field has been set.

### GetReimbursedAmount

`func (o *CertificateReconciliationType) GetReimbursedAmount() float32`

GetReimbursedAmount returns the ReimbursedAmount field if non-nil, zero value otherwise.

### GetReimbursedAmountOk

`func (o *CertificateReconciliationType) GetReimbursedAmountOk() (*float32, bool)`

GetReimbursedAmountOk returns a tuple with the ReimbursedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursedAmount

`func (o *CertificateReconciliationType) SetReimbursedAmount(v float32)`

SetReimbursedAmount sets ReimbursedAmount field to given value.

### HasReimbursedAmount

`func (o *CertificateReconciliationType) HasReimbursedAmount() bool`

HasReimbursedAmount returns a boolean if a field has been set.

### GetPostingDateTime

`func (o *CertificateReconciliationType) GetPostingDateTime() string`

GetPostingDateTime returns the PostingDateTime field if non-nil, zero value otherwise.

### GetPostingDateTimeOk

`func (o *CertificateReconciliationType) GetPostingDateTimeOk() (*string, bool)`

GetPostingDateTimeOk returns a tuple with the PostingDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDateTime

`func (o *CertificateReconciliationType) SetPostingDateTime(v string)`

SetPostingDateTime sets PostingDateTime field to given value.

### HasPostingDateTime

`func (o *CertificateReconciliationType) HasPostingDateTime() bool`

HasPostingDateTime returns a boolean if a field has been set.

### GetPostingBusinessDate

`func (o *CertificateReconciliationType) GetPostingBusinessDate() string`

GetPostingBusinessDate returns the PostingBusinessDate field if non-nil, zero value otherwise.

### GetPostingBusinessDateOk

`func (o *CertificateReconciliationType) GetPostingBusinessDateOk() (*string, bool)`

GetPostingBusinessDateOk returns a tuple with the PostingBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingBusinessDate

`func (o *CertificateReconciliationType) SetPostingBusinessDate(v string)`

SetPostingBusinessDate sets PostingBusinessDate field to given value.

### HasPostingBusinessDate

`func (o *CertificateReconciliationType) HasPostingBusinessDate() bool`

HasPostingBusinessDate returns a boolean if a field has been set.

### GetSettlementDateTime

`func (o *CertificateReconciliationType) GetSettlementDateTime() string`

GetSettlementDateTime returns the SettlementDateTime field if non-nil, zero value otherwise.

### GetSettlementDateTimeOk

`func (o *CertificateReconciliationType) GetSettlementDateTimeOk() (*string, bool)`

GetSettlementDateTimeOk returns a tuple with the SettlementDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementDateTime

`func (o *CertificateReconciliationType) SetSettlementDateTime(v string)`

SetSettlementDateTime sets SettlementDateTime field to given value.

### HasSettlementDateTime

`func (o *CertificateReconciliationType) HasSettlementDateTime() bool`

HasSettlementDateTime returns a boolean if a field has been set.

### GetSettlementBusinessDate

`func (o *CertificateReconciliationType) GetSettlementBusinessDate() string`

GetSettlementBusinessDate returns the SettlementBusinessDate field if non-nil, zero value otherwise.

### GetSettlementBusinessDateOk

`func (o *CertificateReconciliationType) GetSettlementBusinessDateOk() (*string, bool)`

GetSettlementBusinessDateOk returns a tuple with the SettlementBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementBusinessDate

`func (o *CertificateReconciliationType) SetSettlementBusinessDate(v string)`

SetSettlementBusinessDate sets SettlementBusinessDate field to given value.

### HasSettlementBusinessDate

`func (o *CertificateReconciliationType) HasSettlementBusinessDate() bool`

HasSettlementBusinessDate returns a boolean if a field has been set.

### GetReimbursementDateTime

`func (o *CertificateReconciliationType) GetReimbursementDateTime() string`

GetReimbursementDateTime returns the ReimbursementDateTime field if non-nil, zero value otherwise.

### GetReimbursementDateTimeOk

`func (o *CertificateReconciliationType) GetReimbursementDateTimeOk() (*string, bool)`

GetReimbursementDateTimeOk returns a tuple with the ReimbursementDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursementDateTime

`func (o *CertificateReconciliationType) SetReimbursementDateTime(v string)`

SetReimbursementDateTime sets ReimbursementDateTime field to given value.

### HasReimbursementDateTime

`func (o *CertificateReconciliationType) HasReimbursementDateTime() bool`

HasReimbursementDateTime returns a boolean if a field has been set.

### GetReimbursementBusinessDate

`func (o *CertificateReconciliationType) GetReimbursementBusinessDate() string`

GetReimbursementBusinessDate returns the ReimbursementBusinessDate field if non-nil, zero value otherwise.

### GetReimbursementBusinessDateOk

`func (o *CertificateReconciliationType) GetReimbursementBusinessDateOk() (*string, bool)`

GetReimbursementBusinessDateOk returns a tuple with the ReimbursementBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursementBusinessDate

`func (o *CertificateReconciliationType) SetReimbursementBusinessDate(v string)`

SetReimbursementBusinessDate sets ReimbursementBusinessDate field to given value.

### HasReimbursementBusinessDate

`func (o *CertificateReconciliationType) HasReimbursementBusinessDate() bool`

HasReimbursementBusinessDate returns a boolean if a field has been set.

### GetFbaBillGenDate

`func (o *CertificateReconciliationType) GetFbaBillGenDate() string`

GetFbaBillGenDate returns the FbaBillGenDate field if non-nil, zero value otherwise.

### GetFbaBillGenDateOk

`func (o *CertificateReconciliationType) GetFbaBillGenDateOk() (*string, bool)`

GetFbaBillGenDateOk returns a tuple with the FbaBillGenDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFbaBillGenDate

`func (o *CertificateReconciliationType) SetFbaBillGenDate(v string)`

SetFbaBillGenDate sets FbaBillGenDate field to given value.

### HasFbaBillGenDate

`func (o *CertificateReconciliationType) HasFbaBillGenDate() bool`

HasFbaBillGenDate returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *CertificateReconciliationType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *CertificateReconciliationType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *CertificateReconciliationType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *CertificateReconciliationType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *CertificateReconciliationType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *CertificateReconciliationType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *CertificateReconciliationType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *CertificateReconciliationType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *CertificateReconciliationType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *CertificateReconciliationType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *CertificateReconciliationType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *CertificateReconciliationType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetFlexibleBenefitAward

`func (o *CertificateReconciliationType) GetFlexibleBenefitAward() bool`

GetFlexibleBenefitAward returns the FlexibleBenefitAward field if non-nil, zero value otherwise.

### GetFlexibleBenefitAwardOk

`func (o *CertificateReconciliationType) GetFlexibleBenefitAwardOk() (*bool, bool)`

GetFlexibleBenefitAwardOk returns a tuple with the FlexibleBenefitAward field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexibleBenefitAward

`func (o *CertificateReconciliationType) SetFlexibleBenefitAward(v bool)`

SetFlexibleBenefitAward sets FlexibleBenefitAward field to given value.

### HasFlexibleBenefitAward

`func (o *CertificateReconciliationType) HasFlexibleBenefitAward() bool`

HasFlexibleBenefitAward returns a boolean if a field has been set.

### GetPosted

`func (o *CertificateReconciliationType) GetPosted() bool`

GetPosted returns the Posted field if non-nil, zero value otherwise.

### GetPostedOk

`func (o *CertificateReconciliationType) GetPostedOk() (*bool, bool)`

GetPostedOk returns a tuple with the Posted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosted

`func (o *CertificateReconciliationType) SetPosted(v bool)`

SetPosted sets Posted field to given value.

### HasPosted

`func (o *CertificateReconciliationType) HasPosted() bool`

HasPosted returns a boolean if a field has been set.

### GetSettled

`func (o *CertificateReconciliationType) GetSettled() bool`

GetSettled returns the Settled field if non-nil, zero value otherwise.

### GetSettledOk

`func (o *CertificateReconciliationType) GetSettledOk() (*bool, bool)`

GetSettledOk returns a tuple with the Settled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettled

`func (o *CertificateReconciliationType) SetSettled(v bool)`

SetSettled sets Settled field to given value.

### HasSettled

`func (o *CertificateReconciliationType) HasSettled() bool`

HasSettled returns a boolean if a field has been set.

### GetReimbursed

`func (o *CertificateReconciliationType) GetReimbursed() bool`

GetReimbursed returns the Reimbursed field if non-nil, zero value otherwise.

### GetReimbursedOk

`func (o *CertificateReconciliationType) GetReimbursedOk() (*bool, bool)`

GetReimbursedOk returns a tuple with the Reimbursed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimbursed

`func (o *CertificateReconciliationType) SetReimbursed(v bool)`

SetReimbursed sets Reimbursed field to given value.

### HasReimbursed

`func (o *CertificateReconciliationType) HasReimbursed() bool`

HasReimbursed returns a boolean if a field has been set.

### GetResettleAllowed

`func (o *CertificateReconciliationType) GetResettleAllowed() bool`

GetResettleAllowed returns the ResettleAllowed field if non-nil, zero value otherwise.

### GetResettleAllowedOk

`func (o *CertificateReconciliationType) GetResettleAllowedOk() (*bool, bool)`

GetResettleAllowedOk returns a tuple with the ResettleAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResettleAllowed

`func (o *CertificateReconciliationType) SetResettleAllowed(v bool)`

SetResettleAllowed sets ResettleAllowed field to given value.

### HasResettleAllowed

`func (o *CertificateReconciliationType) HasResettleAllowed() bool`

HasResettleAllowed returns a boolean if a field has been set.

### GetReimburseAllowed

`func (o *CertificateReconciliationType) GetReimburseAllowed() bool`

GetReimburseAllowed returns the ReimburseAllowed field if non-nil, zero value otherwise.

### GetReimburseAllowedOk

`func (o *CertificateReconciliationType) GetReimburseAllowedOk() (*bool, bool)`

GetReimburseAllowedOk returns a tuple with the ReimburseAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReimburseAllowed

`func (o *CertificateReconciliationType) SetReimburseAllowed(v bool)`

SetReimburseAllowed sets ReimburseAllowed field to given value.

### HasReimburseAllowed

`func (o *CertificateReconciliationType) HasReimburseAllowed() bool`

HasReimburseAllowed returns a boolean if a field has been set.

### GetOrphanCertificate

`func (o *CertificateReconciliationType) GetOrphanCertificate() bool`

GetOrphanCertificate returns the OrphanCertificate field if non-nil, zero value otherwise.

### GetOrphanCertificateOk

`func (o *CertificateReconciliationType) GetOrphanCertificateOk() (*bool, bool)`

GetOrphanCertificateOk returns a tuple with the OrphanCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrphanCertificate

`func (o *CertificateReconciliationType) SetOrphanCertificate(v bool)`

SetOrphanCertificate sets OrphanCertificate field to given value.

### HasOrphanCertificate

`func (o *CertificateReconciliationType) HasOrphanCertificate() bool`

HasOrphanCertificate returns a boolean if a field has been set.

### GetHotelId

`func (o *CertificateReconciliationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CertificateReconciliationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CertificateReconciliationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CertificateReconciliationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *CertificateReconciliationType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CertificateReconciliationType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CertificateReconciliationType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CertificateReconciliationType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetFBAStatus

`func (o *CertificateReconciliationType) GetFBAStatus() FBAStatusType`

GetFBAStatus returns the FBAStatus field if non-nil, zero value otherwise.

### GetFBAStatusOk

`func (o *CertificateReconciliationType) GetFBAStatusOk() (*FBAStatusType, bool)`

GetFBAStatusOk returns a tuple with the FBAStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBAStatus

`func (o *CertificateReconciliationType) SetFBAStatus(v FBAStatusType)`

SetFBAStatus sets FBAStatus field to given value.

### HasFBAStatus

`func (o *CertificateReconciliationType) HasFBAStatus() bool`

HasFBAStatus returns a boolean if a field has been set.

### GetCertificateNumber

`func (o *CertificateReconciliationType) GetCertificateNumber() string`

GetCertificateNumber returns the CertificateNumber field if non-nil, zero value otherwise.

### GetCertificateNumberOk

`func (o *CertificateReconciliationType) GetCertificateNumberOk() (*string, bool)`

GetCertificateNumberOk returns a tuple with the CertificateNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateNumber

`func (o *CertificateReconciliationType) SetCertificateNumber(v string)`

SetCertificateNumber sets CertificateNumber field to given value.

### HasCertificateNumber

`func (o *CertificateReconciliationType) HasCertificateNumber() bool`

HasCertificateNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


