# CCAuthorizationCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Identifies the hotel code to authorize a credit card amount for. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FolioView** | Pointer to **int32** | The folio window where this authorization is applied. | [optional] 
**Payment** | Pointer to [**CashieringPaymentMethodType**](CashieringPaymentMethodType.md) |  | [optional] 
**TerminalId** | Pointer to **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected. | [optional] 
**IncidentalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**EvaluateApprovalAmount** | Pointer to **bool** | Flag to indicate if the approval amount should be calculated before authorization. If this is true and if the amount is 0 the approval amount will be calculated based on the rules. | [optional] 
**SourceOfAuthorization** | Pointer to [**CardAuthorizationTransactionType**](CardAuthorizationTransactionType.md) |  | [optional] 
**UpdateReservation** | Pointer to **bool** | Update the card details on the reservations for Chip and Pin Authorizations. | [optional] 
**CcRequestId** | Pointer to **string** | Session Id registered in the WebSocket component for asynchronous Credit Card handling. | [optional] 

## Methods

### NewCCAuthorizationCriteriaType

`func NewCCAuthorizationCriteriaType() *CCAuthorizationCriteriaType`

NewCCAuthorizationCriteriaType instantiates a new CCAuthorizationCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCAuthorizationCriteriaTypeWithDefaults

`func NewCCAuthorizationCriteriaTypeWithDefaults() *CCAuthorizationCriteriaType`

NewCCAuthorizationCriteriaTypeWithDefaults instantiates a new CCAuthorizationCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CCAuthorizationCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CCAuthorizationCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CCAuthorizationCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CCAuthorizationCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *CCAuthorizationCriteriaType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CCAuthorizationCriteriaType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CCAuthorizationCriteriaType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CCAuthorizationCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetProfileId

`func (o *CCAuthorizationCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *CCAuthorizationCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *CCAuthorizationCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *CCAuthorizationCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetAmount

`func (o *CCAuthorizationCriteriaType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CCAuthorizationCriteriaType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CCAuthorizationCriteriaType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CCAuthorizationCriteriaType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetFolioView

`func (o *CCAuthorizationCriteriaType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *CCAuthorizationCriteriaType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *CCAuthorizationCriteriaType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *CCAuthorizationCriteriaType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetPayment

`func (o *CCAuthorizationCriteriaType) GetPayment() CashieringPaymentMethodType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *CCAuthorizationCriteriaType) GetPaymentOk() (*CashieringPaymentMethodType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *CCAuthorizationCriteriaType) SetPayment(v CashieringPaymentMethodType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *CCAuthorizationCriteriaType) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetTerminalId

`func (o *CCAuthorizationCriteriaType) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *CCAuthorizationCriteriaType) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *CCAuthorizationCriteriaType) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *CCAuthorizationCriteriaType) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetIncidentalAmount

`func (o *CCAuthorizationCriteriaType) GetIncidentalAmount() CurrencyAmountType`

GetIncidentalAmount returns the IncidentalAmount field if non-nil, zero value otherwise.

### GetIncidentalAmountOk

`func (o *CCAuthorizationCriteriaType) GetIncidentalAmountOk() (*CurrencyAmountType, bool)`

GetIncidentalAmountOk returns a tuple with the IncidentalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentalAmount

`func (o *CCAuthorizationCriteriaType) SetIncidentalAmount(v CurrencyAmountType)`

SetIncidentalAmount sets IncidentalAmount field to given value.

### HasIncidentalAmount

`func (o *CCAuthorizationCriteriaType) HasIncidentalAmount() bool`

HasIncidentalAmount returns a boolean if a field has been set.

### GetEvaluateApprovalAmount

`func (o *CCAuthorizationCriteriaType) GetEvaluateApprovalAmount() bool`

GetEvaluateApprovalAmount returns the EvaluateApprovalAmount field if non-nil, zero value otherwise.

### GetEvaluateApprovalAmountOk

`func (o *CCAuthorizationCriteriaType) GetEvaluateApprovalAmountOk() (*bool, bool)`

GetEvaluateApprovalAmountOk returns a tuple with the EvaluateApprovalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvaluateApprovalAmount

`func (o *CCAuthorizationCriteriaType) SetEvaluateApprovalAmount(v bool)`

SetEvaluateApprovalAmount sets EvaluateApprovalAmount field to given value.

### HasEvaluateApprovalAmount

`func (o *CCAuthorizationCriteriaType) HasEvaluateApprovalAmount() bool`

HasEvaluateApprovalAmount returns a boolean if a field has been set.

### GetSourceOfAuthorization

`func (o *CCAuthorizationCriteriaType) GetSourceOfAuthorization() CardAuthorizationTransactionType`

GetSourceOfAuthorization returns the SourceOfAuthorization field if non-nil, zero value otherwise.

### GetSourceOfAuthorizationOk

`func (o *CCAuthorizationCriteriaType) GetSourceOfAuthorizationOk() (*CardAuthorizationTransactionType, bool)`

GetSourceOfAuthorizationOk returns a tuple with the SourceOfAuthorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfAuthorization

`func (o *CCAuthorizationCriteriaType) SetSourceOfAuthorization(v CardAuthorizationTransactionType)`

SetSourceOfAuthorization sets SourceOfAuthorization field to given value.

### HasSourceOfAuthorization

`func (o *CCAuthorizationCriteriaType) HasSourceOfAuthorization() bool`

HasSourceOfAuthorization returns a boolean if a field has been set.

### GetUpdateReservation

`func (o *CCAuthorizationCriteriaType) GetUpdateReservation() bool`

GetUpdateReservation returns the UpdateReservation field if non-nil, zero value otherwise.

### GetUpdateReservationOk

`func (o *CCAuthorizationCriteriaType) GetUpdateReservationOk() (*bool, bool)`

GetUpdateReservationOk returns a tuple with the UpdateReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateReservation

`func (o *CCAuthorizationCriteriaType) SetUpdateReservation(v bool)`

SetUpdateReservation sets UpdateReservation field to given value.

### HasUpdateReservation

`func (o *CCAuthorizationCriteriaType) HasUpdateReservation() bool`

HasUpdateReservation returns a boolean if a field has been set.

### GetCcRequestId

`func (o *CCAuthorizationCriteriaType) GetCcRequestId() string`

GetCcRequestId returns the CcRequestId field if non-nil, zero value otherwise.

### GetCcRequestIdOk

`func (o *CCAuthorizationCriteriaType) GetCcRequestIdOk() (*string, bool)`

GetCcRequestIdOk returns a tuple with the CcRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcRequestId

`func (o *CCAuthorizationCriteriaType) SetCcRequestId(v string)`

SetCcRequestId sets CcRequestId field to given value.

### HasCcRequestId

`func (o *CCAuthorizationCriteriaType) HasCcRequestId() bool`

HasCcRequestId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


