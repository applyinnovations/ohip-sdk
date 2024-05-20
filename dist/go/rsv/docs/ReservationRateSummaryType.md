# ReservationRateSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyCode** | Pointer to **string** | Currency revenue calculation is based on. | [optional] 
**Deposit** | Pointer to **float32** | Amount paid prior to the stay. | [optional] 
**Details** | Pointer to [**[]ReservationRateSummaryDetailType**](ReservationRateSummaryDetailType.md) |  | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**FixedCharges** | Pointer to **float32** | Amount of automatically posted charges along with room and taxes. | [optional] 
**Gross** | Pointer to **float32** | Amount of revenue and package excluding tax. | [optional] 
**GuestPay** | Pointer to **float32** | Amount to be paid by Guest. | [optional] 
**HasSuppressedRate** | Pointer to **bool** | Whether suppressed rate is present or not. | [optional] 
**Net** | Pointer to **float32** | Amount of revenue and package including tax. | [optional] 
**OutStandingCostOfStay** | Pointer to **float32** | Remaining amount to be paid. | [optional] 
**Routing** | Pointer to **float32** | Amount of automatically forwarded charges for specific transaction codes. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**TotalCostOfStay** | Pointer to **float32** | Amount of total cost of stay. | [optional] 

## Methods

### NewReservationRateSummaryType

`func NewReservationRateSummaryType() *ReservationRateSummaryType`

NewReservationRateSummaryType instantiates a new ReservationRateSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRateSummaryTypeWithDefaults

`func NewReservationRateSummaryTypeWithDefaults() *ReservationRateSummaryType`

NewReservationRateSummaryTypeWithDefaults instantiates a new ReservationRateSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyCode

`func (o *ReservationRateSummaryType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ReservationRateSummaryType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ReservationRateSummaryType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ReservationRateSummaryType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDeposit

`func (o *ReservationRateSummaryType) GetDeposit() float32`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *ReservationRateSummaryType) GetDepositOk() (*float32, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *ReservationRateSummaryType) SetDeposit(v float32)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *ReservationRateSummaryType) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetDetails

`func (o *ReservationRateSummaryType) GetDetails() []ReservationRateSummaryDetailType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *ReservationRateSummaryType) GetDetailsOk() (*[]ReservationRateSummaryDetailType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *ReservationRateSummaryType) SetDetails(v []ReservationRateSummaryDetailType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *ReservationRateSummaryType) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetEnd

`func (o *ReservationRateSummaryType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ReservationRateSummaryType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ReservationRateSummaryType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ReservationRateSummaryType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFixedCharges

`func (o *ReservationRateSummaryType) GetFixedCharges() float32`

GetFixedCharges returns the FixedCharges field if non-nil, zero value otherwise.

### GetFixedChargesOk

`func (o *ReservationRateSummaryType) GetFixedChargesOk() (*float32, bool)`

GetFixedChargesOk returns a tuple with the FixedCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharges

`func (o *ReservationRateSummaryType) SetFixedCharges(v float32)`

SetFixedCharges sets FixedCharges field to given value.

### HasFixedCharges

`func (o *ReservationRateSummaryType) HasFixedCharges() bool`

HasFixedCharges returns a boolean if a field has been set.

### GetGross

`func (o *ReservationRateSummaryType) GetGross() float32`

GetGross returns the Gross field if non-nil, zero value otherwise.

### GetGrossOk

`func (o *ReservationRateSummaryType) GetGrossOk() (*float32, bool)`

GetGrossOk returns a tuple with the Gross field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGross

`func (o *ReservationRateSummaryType) SetGross(v float32)`

SetGross sets Gross field to given value.

### HasGross

`func (o *ReservationRateSummaryType) HasGross() bool`

HasGross returns a boolean if a field has been set.

### GetGuestPay

`func (o *ReservationRateSummaryType) GetGuestPay() float32`

GetGuestPay returns the GuestPay field if non-nil, zero value otherwise.

### GetGuestPayOk

`func (o *ReservationRateSummaryType) GetGuestPayOk() (*float32, bool)`

GetGuestPayOk returns a tuple with the GuestPay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestPay

`func (o *ReservationRateSummaryType) SetGuestPay(v float32)`

SetGuestPay sets GuestPay field to given value.

### HasGuestPay

`func (o *ReservationRateSummaryType) HasGuestPay() bool`

HasGuestPay returns a boolean if a field has been set.

### GetHasSuppressedRate

`func (o *ReservationRateSummaryType) GetHasSuppressedRate() bool`

GetHasSuppressedRate returns the HasSuppressedRate field if non-nil, zero value otherwise.

### GetHasSuppressedRateOk

`func (o *ReservationRateSummaryType) GetHasSuppressedRateOk() (*bool, bool)`

GetHasSuppressedRateOk returns a tuple with the HasSuppressedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasSuppressedRate

`func (o *ReservationRateSummaryType) SetHasSuppressedRate(v bool)`

SetHasSuppressedRate sets HasSuppressedRate field to given value.

### HasHasSuppressedRate

`func (o *ReservationRateSummaryType) HasHasSuppressedRate() bool`

HasHasSuppressedRate returns a boolean if a field has been set.

### GetNet

`func (o *ReservationRateSummaryType) GetNet() float32`

GetNet returns the Net field if non-nil, zero value otherwise.

### GetNetOk

`func (o *ReservationRateSummaryType) GetNetOk() (*float32, bool)`

GetNetOk returns a tuple with the Net field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNet

`func (o *ReservationRateSummaryType) SetNet(v float32)`

SetNet sets Net field to given value.

### HasNet

`func (o *ReservationRateSummaryType) HasNet() bool`

HasNet returns a boolean if a field has been set.

### GetOutStandingCostOfStay

`func (o *ReservationRateSummaryType) GetOutStandingCostOfStay() float32`

GetOutStandingCostOfStay returns the OutStandingCostOfStay field if non-nil, zero value otherwise.

### GetOutStandingCostOfStayOk

`func (o *ReservationRateSummaryType) GetOutStandingCostOfStayOk() (*float32, bool)`

GetOutStandingCostOfStayOk returns a tuple with the OutStandingCostOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutStandingCostOfStay

`func (o *ReservationRateSummaryType) SetOutStandingCostOfStay(v float32)`

SetOutStandingCostOfStay sets OutStandingCostOfStay field to given value.

### HasOutStandingCostOfStay

`func (o *ReservationRateSummaryType) HasOutStandingCostOfStay() bool`

HasOutStandingCostOfStay returns a boolean if a field has been set.

### GetRouting

`func (o *ReservationRateSummaryType) GetRouting() float32`

GetRouting returns the Routing field if non-nil, zero value otherwise.

### GetRoutingOk

`func (o *ReservationRateSummaryType) GetRoutingOk() (*float32, bool)`

GetRoutingOk returns a tuple with the Routing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouting

`func (o *ReservationRateSummaryType) SetRouting(v float32)`

SetRouting sets Routing field to given value.

### HasRouting

`func (o *ReservationRateSummaryType) HasRouting() bool`

HasRouting returns a boolean if a field has been set.

### GetStart

`func (o *ReservationRateSummaryType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ReservationRateSummaryType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ReservationRateSummaryType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ReservationRateSummaryType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetTotalCostOfStay

`func (o *ReservationRateSummaryType) GetTotalCostOfStay() float32`

GetTotalCostOfStay returns the TotalCostOfStay field if non-nil, zero value otherwise.

### GetTotalCostOfStayOk

`func (o *ReservationRateSummaryType) GetTotalCostOfStayOk() (*float32, bool)`

GetTotalCostOfStayOk returns a tuple with the TotalCostOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCostOfStay

`func (o *ReservationRateSummaryType) SetTotalCostOfStay(v float32)`

SetTotalCostOfStay sets TotalCostOfStay field to given value.

### HasTotalCostOfStay

`func (o *ReservationRateSummaryType) HasTotalCostOfStay() bool`

HasTotalCostOfStay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


