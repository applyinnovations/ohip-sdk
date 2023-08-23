# RedeemPrepaidCardCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**PrepaidCardRedemptions** | Pointer to [**[]PrepaidCardRedemptionType**](PrepaidCardRedemptionType.md) | A prepaid redemption info object to be used for posting a payment. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FolioView** | Pointer to **int32** | Folio Window. | [optional] 

## Methods

### NewRedeemPrepaidCardCriteriaType

`func NewRedeemPrepaidCardCriteriaType() *RedeemPrepaidCardCriteriaType`

NewRedeemPrepaidCardCriteriaType instantiates a new RedeemPrepaidCardCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRedeemPrepaidCardCriteriaTypeWithDefaults

`func NewRedeemPrepaidCardCriteriaTypeWithDefaults() *RedeemPrepaidCardCriteriaType`

NewRedeemPrepaidCardCriteriaTypeWithDefaults instantiates a new RedeemPrepaidCardCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RedeemPrepaidCardCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RedeemPrepaidCardCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RedeemPrepaidCardCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RedeemPrepaidCardCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *RedeemPrepaidCardCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RedeemPrepaidCardCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RedeemPrepaidCardCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RedeemPrepaidCardCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetPrepaidCardRedemptions

`func (o *RedeemPrepaidCardCriteriaType) GetPrepaidCardRedemptions() []PrepaidCardRedemptionType`

GetPrepaidCardRedemptions returns the PrepaidCardRedemptions field if non-nil, zero value otherwise.

### GetPrepaidCardRedemptionsOk

`func (o *RedeemPrepaidCardCriteriaType) GetPrepaidCardRedemptionsOk() (*[]PrepaidCardRedemptionType, bool)`

GetPrepaidCardRedemptionsOk returns a tuple with the PrepaidCardRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCardRedemptions

`func (o *RedeemPrepaidCardCriteriaType) SetPrepaidCardRedemptions(v []PrepaidCardRedemptionType)`

SetPrepaidCardRedemptions sets PrepaidCardRedemptions field to given value.

### HasPrepaidCardRedemptions

`func (o *RedeemPrepaidCardCriteriaType) HasPrepaidCardRedemptions() bool`

HasPrepaidCardRedemptions returns a boolean if a field has been set.

### GetCashierId

`func (o *RedeemPrepaidCardCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *RedeemPrepaidCardCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *RedeemPrepaidCardCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *RedeemPrepaidCardCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFolioView

`func (o *RedeemPrepaidCardCriteriaType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *RedeemPrepaidCardCriteriaType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *RedeemPrepaidCardCriteriaType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *RedeemPrepaidCardCriteriaType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


