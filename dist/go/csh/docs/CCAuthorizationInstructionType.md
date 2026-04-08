# CCAuthorizationInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrentApprovalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalApprovalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**IncidentalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AuthorizationSetup** | Pointer to [**CCAuthorizationInstructionTypeAuthorizationSetup**](CCAuthorizationInstructionTypeAuthorizationSetup.md) |  | [optional] 
**ReservationDetail** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**PaymentMethodInfo** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**SequenceNumber** | Pointer to **string** | Unique sequence for this authorization. | [optional] 
**TransactionType** | Pointer to **string** | Transaction type of the authorization(INIT or SUPP). | [optional] 
**OriginalAuthSequence** | Pointer to **int32** | Unique Authorization Sequence for the authorization and settlement. | [optional] 
**UsageType** | Pointer to **string** | Usage type used. | [optional] 
**VendorTranId** | Pointer to **string** | Vendor transaction id for the authorization. | [optional] 
**InitialAuthorizationRequired** | Pointer to **bool** | Flag to indicate if initial authorization required. | [optional] 
**BusinessDate** | Pointer to **string** | The current date of the Property. | [optional] 

## Methods

### NewCCAuthorizationInstructionType

`func NewCCAuthorizationInstructionType() *CCAuthorizationInstructionType`

NewCCAuthorizationInstructionType instantiates a new CCAuthorizationInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCAuthorizationInstructionTypeWithDefaults

`func NewCCAuthorizationInstructionTypeWithDefaults() *CCAuthorizationInstructionType`

NewCCAuthorizationInstructionTypeWithDefaults instantiates a new CCAuthorizationInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrentApprovalAmount

`func (o *CCAuthorizationInstructionType) GetCurrentApprovalAmount() CurrencyAmountType`

GetCurrentApprovalAmount returns the CurrentApprovalAmount field if non-nil, zero value otherwise.

### GetCurrentApprovalAmountOk

`func (o *CCAuthorizationInstructionType) GetCurrentApprovalAmountOk() (*CurrencyAmountType, bool)`

GetCurrentApprovalAmountOk returns a tuple with the CurrentApprovalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentApprovalAmount

`func (o *CCAuthorizationInstructionType) SetCurrentApprovalAmount(v CurrencyAmountType)`

SetCurrentApprovalAmount sets CurrentApprovalAmount field to given value.

### HasCurrentApprovalAmount

`func (o *CCAuthorizationInstructionType) HasCurrentApprovalAmount() bool`

HasCurrentApprovalAmount returns a boolean if a field has been set.

### GetTotalApprovalAmount

`func (o *CCAuthorizationInstructionType) GetTotalApprovalAmount() CurrencyAmountType`

GetTotalApprovalAmount returns the TotalApprovalAmount field if non-nil, zero value otherwise.

### GetTotalApprovalAmountOk

`func (o *CCAuthorizationInstructionType) GetTotalApprovalAmountOk() (*CurrencyAmountType, bool)`

GetTotalApprovalAmountOk returns a tuple with the TotalApprovalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalApprovalAmount

`func (o *CCAuthorizationInstructionType) SetTotalApprovalAmount(v CurrencyAmountType)`

SetTotalApprovalAmount sets TotalApprovalAmount field to given value.

### HasTotalApprovalAmount

`func (o *CCAuthorizationInstructionType) HasTotalApprovalAmount() bool`

HasTotalApprovalAmount returns a boolean if a field has been set.

### GetIncidentalAmount

`func (o *CCAuthorizationInstructionType) GetIncidentalAmount() CurrencyAmountType`

GetIncidentalAmount returns the IncidentalAmount field if non-nil, zero value otherwise.

### GetIncidentalAmountOk

`func (o *CCAuthorizationInstructionType) GetIncidentalAmountOk() (*CurrencyAmountType, bool)`

GetIncidentalAmountOk returns a tuple with the IncidentalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentalAmount

`func (o *CCAuthorizationInstructionType) SetIncidentalAmount(v CurrencyAmountType)`

SetIncidentalAmount sets IncidentalAmount field to given value.

### HasIncidentalAmount

`func (o *CCAuthorizationInstructionType) HasIncidentalAmount() bool`

HasIncidentalAmount returns a boolean if a field has been set.

### GetAuthorizationSetup

`func (o *CCAuthorizationInstructionType) GetAuthorizationSetup() CCAuthorizationInstructionTypeAuthorizationSetup`

GetAuthorizationSetup returns the AuthorizationSetup field if non-nil, zero value otherwise.

### GetAuthorizationSetupOk

`func (o *CCAuthorizationInstructionType) GetAuthorizationSetupOk() (*CCAuthorizationInstructionTypeAuthorizationSetup, bool)`

GetAuthorizationSetupOk returns a tuple with the AuthorizationSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationSetup

`func (o *CCAuthorizationInstructionType) SetAuthorizationSetup(v CCAuthorizationInstructionTypeAuthorizationSetup)`

SetAuthorizationSetup sets AuthorizationSetup field to given value.

### HasAuthorizationSetup

`func (o *CCAuthorizationInstructionType) HasAuthorizationSetup() bool`

HasAuthorizationSetup returns a boolean if a field has been set.

### GetReservationDetail

`func (o *CCAuthorizationInstructionType) GetReservationDetail() ReservationInfoType`

GetReservationDetail returns the ReservationDetail field if non-nil, zero value otherwise.

### GetReservationDetailOk

`func (o *CCAuthorizationInstructionType) GetReservationDetailOk() (*ReservationInfoType, bool)`

GetReservationDetailOk returns a tuple with the ReservationDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDetail

`func (o *CCAuthorizationInstructionType) SetReservationDetail(v ReservationInfoType)`

SetReservationDetail sets ReservationDetail field to given value.

### HasReservationDetail

`func (o *CCAuthorizationInstructionType) HasReservationDetail() bool`

HasReservationDetail returns a boolean if a field has been set.

### GetPaymentMethodInfo

`func (o *CCAuthorizationInstructionType) GetPaymentMethodInfo() ReservationPaymentMethodType`

GetPaymentMethodInfo returns the PaymentMethodInfo field if non-nil, zero value otherwise.

### GetPaymentMethodInfoOk

`func (o *CCAuthorizationInstructionType) GetPaymentMethodInfoOk() (*ReservationPaymentMethodType, bool)`

GetPaymentMethodInfoOk returns a tuple with the PaymentMethodInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodInfo

`func (o *CCAuthorizationInstructionType) SetPaymentMethodInfo(v ReservationPaymentMethodType)`

SetPaymentMethodInfo sets PaymentMethodInfo field to given value.

### HasPaymentMethodInfo

`func (o *CCAuthorizationInstructionType) HasPaymentMethodInfo() bool`

HasPaymentMethodInfo returns a boolean if a field has been set.

### GetSequenceNumber

`func (o *CCAuthorizationInstructionType) GetSequenceNumber() string`

GetSequenceNumber returns the SequenceNumber field if non-nil, zero value otherwise.

### GetSequenceNumberOk

`func (o *CCAuthorizationInstructionType) GetSequenceNumberOk() (*string, bool)`

GetSequenceNumberOk returns a tuple with the SequenceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequenceNumber

`func (o *CCAuthorizationInstructionType) SetSequenceNumber(v string)`

SetSequenceNumber sets SequenceNumber field to given value.

### HasSequenceNumber

`func (o *CCAuthorizationInstructionType) HasSequenceNumber() bool`

HasSequenceNumber returns a boolean if a field has been set.

### GetTransactionType

`func (o *CCAuthorizationInstructionType) GetTransactionType() string`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *CCAuthorizationInstructionType) GetTransactionTypeOk() (*string, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *CCAuthorizationInstructionType) SetTransactionType(v string)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *CCAuthorizationInstructionType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetOriginalAuthSequence

`func (o *CCAuthorizationInstructionType) GetOriginalAuthSequence() int32`

GetOriginalAuthSequence returns the OriginalAuthSequence field if non-nil, zero value otherwise.

### GetOriginalAuthSequenceOk

`func (o *CCAuthorizationInstructionType) GetOriginalAuthSequenceOk() (*int32, bool)`

GetOriginalAuthSequenceOk returns a tuple with the OriginalAuthSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAuthSequence

`func (o *CCAuthorizationInstructionType) SetOriginalAuthSequence(v int32)`

SetOriginalAuthSequence sets OriginalAuthSequence field to given value.

### HasOriginalAuthSequence

`func (o *CCAuthorizationInstructionType) HasOriginalAuthSequence() bool`

HasOriginalAuthSequence returns a boolean if a field has been set.

### GetUsageType

`func (o *CCAuthorizationInstructionType) GetUsageType() string`

GetUsageType returns the UsageType field if non-nil, zero value otherwise.

### GetUsageTypeOk

`func (o *CCAuthorizationInstructionType) GetUsageTypeOk() (*string, bool)`

GetUsageTypeOk returns a tuple with the UsageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageType

`func (o *CCAuthorizationInstructionType) SetUsageType(v string)`

SetUsageType sets UsageType field to given value.

### HasUsageType

`func (o *CCAuthorizationInstructionType) HasUsageType() bool`

HasUsageType returns a boolean if a field has been set.

### GetVendorTranId

`func (o *CCAuthorizationInstructionType) GetVendorTranId() string`

GetVendorTranId returns the VendorTranId field if non-nil, zero value otherwise.

### GetVendorTranIdOk

`func (o *CCAuthorizationInstructionType) GetVendorTranIdOk() (*string, bool)`

GetVendorTranIdOk returns a tuple with the VendorTranId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorTranId

`func (o *CCAuthorizationInstructionType) SetVendorTranId(v string)`

SetVendorTranId sets VendorTranId field to given value.

### HasVendorTranId

`func (o *CCAuthorizationInstructionType) HasVendorTranId() bool`

HasVendorTranId returns a boolean if a field has been set.

### GetInitialAuthorizationRequired

`func (o *CCAuthorizationInstructionType) GetInitialAuthorizationRequired() bool`

GetInitialAuthorizationRequired returns the InitialAuthorizationRequired field if non-nil, zero value otherwise.

### GetInitialAuthorizationRequiredOk

`func (o *CCAuthorizationInstructionType) GetInitialAuthorizationRequiredOk() (*bool, bool)`

GetInitialAuthorizationRequiredOk returns a tuple with the InitialAuthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialAuthorizationRequired

`func (o *CCAuthorizationInstructionType) SetInitialAuthorizationRequired(v bool)`

SetInitialAuthorizationRequired sets InitialAuthorizationRequired field to given value.

### HasInitialAuthorizationRequired

`func (o *CCAuthorizationInstructionType) HasInitialAuthorizationRequired() bool`

HasInitialAuthorizationRequired returns a boolean if a field has been set.

### GetBusinessDate

`func (o *CCAuthorizationInstructionType) GetBusinessDate() string`

GetBusinessDate returns the BusinessDate field if non-nil, zero value otherwise.

### GetBusinessDateOk

`func (o *CCAuthorizationInstructionType) GetBusinessDateOk() (*string, bool)`

GetBusinessDateOk returns a tuple with the BusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessDate

`func (o *CCAuthorizationInstructionType) SetBusinessDate(v string)`

SetBusinessDate sets BusinessDate field to given value.

### HasBusinessDate

`func (o *CCAuthorizationInstructionType) HasBusinessDate() bool`

HasBusinessDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


