# BillingChargesCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the charges are to be posted. | [optional] 
**Charges** | Pointer to [**[]ChargeCriteriaType**](ChargeCriteriaType.md) | Collection of Charges to be posted. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**IncomeAuditDate** | Pointer to **string** | Date of the Audit. This is used when postings are being created using the Income Audit functionality. | [optional] 
**PostIt** | Pointer to **bool** | Flag to indicate it is part of a PostIt Sale. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**WelcomeOfferPosting** | Pointer to **bool** | Flag to indicate that current posting is a Welcome Offer Posting. | [optional] 

## Methods

### NewBillingChargesCriteriaType

`func NewBillingChargesCriteriaType() *BillingChargesCriteriaType`

NewBillingChargesCriteriaType instantiates a new BillingChargesCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingChargesCriteriaTypeWithDefaults

`func NewBillingChargesCriteriaTypeWithDefaults() *BillingChargesCriteriaType`

NewBillingChargesCriteriaTypeWithDefaults instantiates a new BillingChargesCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BillingChargesCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BillingChargesCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BillingChargesCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BillingChargesCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCharges

`func (o *BillingChargesCriteriaType) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *BillingChargesCriteriaType) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *BillingChargesCriteriaType) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *BillingChargesCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetReservationId

`func (o *BillingChargesCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *BillingChargesCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *BillingChargesCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *BillingChargesCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetIncomeAuditDate

`func (o *BillingChargesCriteriaType) GetIncomeAuditDate() string`

GetIncomeAuditDate returns the IncomeAuditDate field if non-nil, zero value otherwise.

### GetIncomeAuditDateOk

`func (o *BillingChargesCriteriaType) GetIncomeAuditDateOk() (*string, bool)`

GetIncomeAuditDateOk returns a tuple with the IncomeAuditDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomeAuditDate

`func (o *BillingChargesCriteriaType) SetIncomeAuditDate(v string)`

SetIncomeAuditDate sets IncomeAuditDate field to given value.

### HasIncomeAuditDate

`func (o *BillingChargesCriteriaType) HasIncomeAuditDate() bool`

HasIncomeAuditDate returns a boolean if a field has been set.

### GetPostIt

`func (o *BillingChargesCriteriaType) GetPostIt() bool`

GetPostIt returns the PostIt field if non-nil, zero value otherwise.

### GetPostItOk

`func (o *BillingChargesCriteriaType) GetPostItOk() (*bool, bool)`

GetPostItOk returns a tuple with the PostIt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostIt

`func (o *BillingChargesCriteriaType) SetPostIt(v bool)`

SetPostIt sets PostIt field to given value.

### HasPostIt

`func (o *BillingChargesCriteriaType) HasPostIt() bool`

HasPostIt returns a boolean if a field has been set.

### GetCashierId

`func (o *BillingChargesCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *BillingChargesCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *BillingChargesCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *BillingChargesCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetWelcomeOfferPosting

`func (o *BillingChargesCriteriaType) GetWelcomeOfferPosting() bool`

GetWelcomeOfferPosting returns the WelcomeOfferPosting field if non-nil, zero value otherwise.

### GetWelcomeOfferPostingOk

`func (o *BillingChargesCriteriaType) GetWelcomeOfferPostingOk() (*bool, bool)`

GetWelcomeOfferPostingOk returns a tuple with the WelcomeOfferPosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOfferPosting

`func (o *BillingChargesCriteriaType) SetWelcomeOfferPosting(v bool)`

SetWelcomeOfferPosting sets WelcomeOfferPosting field to given value.

### HasWelcomeOfferPosting

`func (o *BillingChargesCriteriaType) HasWelcomeOfferPosting() bool`

HasWelcomeOfferPosting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


