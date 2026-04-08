# SubAllocationTypeBlockSecurity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SecuredFromDIdisplayYn** | Pointer to **bool** | Secured from DI Display. | [optional] 
**AllDescriptionDDSecured** | Pointer to **bool** | All Description DD Secured. | [optional] 
**RatesSecuredfromGNR** | Pointer to **bool** | Rates Secured from GNR. | [optional] 
**RatesSecuredfromAllDisplays** | Pointer to **bool** | Rates Secured from All Displays. | [optional] 
**HousingInformationSecured** | Pointer to **bool** | Housing Information Secured. | [optional] 
**DaysDepositRequired** | Pointer to **float32** | Number of Days Deposit due to guarantee the guest booking. | [optional] 
**AdvanceCancelDays** | Pointer to **float32** | Number of days before the arrival date a reservation can be canceled without losing the deposit. | [optional] 
**ReturnOneDayAtTimeYn** | Pointer to **bool** | Return One Day at a time. | [optional] 
**CommissionableYn** | Pointer to **bool** | Determines if Travel Agent commission will be paid on reservations booked through the HOLIDEX Plus TACP program. | [optional] 

## Methods

### NewSubAllocationTypeBlockSecurity

`func NewSubAllocationTypeBlockSecurity() *SubAllocationTypeBlockSecurity`

NewSubAllocationTypeBlockSecurity instantiates a new SubAllocationTypeBlockSecurity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubAllocationTypeBlockSecurityWithDefaults

`func NewSubAllocationTypeBlockSecurityWithDefaults() *SubAllocationTypeBlockSecurity`

NewSubAllocationTypeBlockSecurityWithDefaults instantiates a new SubAllocationTypeBlockSecurity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecuredFromDIdisplayYn

`func (o *SubAllocationTypeBlockSecurity) GetSecuredFromDIdisplayYn() bool`

GetSecuredFromDIdisplayYn returns the SecuredFromDIdisplayYn field if non-nil, zero value otherwise.

### GetSecuredFromDIdisplayYnOk

`func (o *SubAllocationTypeBlockSecurity) GetSecuredFromDIdisplayYnOk() (*bool, bool)`

GetSecuredFromDIdisplayYnOk returns a tuple with the SecuredFromDIdisplayYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecuredFromDIdisplayYn

`func (o *SubAllocationTypeBlockSecurity) SetSecuredFromDIdisplayYn(v bool)`

SetSecuredFromDIdisplayYn sets SecuredFromDIdisplayYn field to given value.

### HasSecuredFromDIdisplayYn

`func (o *SubAllocationTypeBlockSecurity) HasSecuredFromDIdisplayYn() bool`

HasSecuredFromDIdisplayYn returns a boolean if a field has been set.

### GetAllDescriptionDDSecured

`func (o *SubAllocationTypeBlockSecurity) GetAllDescriptionDDSecured() bool`

GetAllDescriptionDDSecured returns the AllDescriptionDDSecured field if non-nil, zero value otherwise.

### GetAllDescriptionDDSecuredOk

`func (o *SubAllocationTypeBlockSecurity) GetAllDescriptionDDSecuredOk() (*bool, bool)`

GetAllDescriptionDDSecuredOk returns a tuple with the AllDescriptionDDSecured field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllDescriptionDDSecured

`func (o *SubAllocationTypeBlockSecurity) SetAllDescriptionDDSecured(v bool)`

SetAllDescriptionDDSecured sets AllDescriptionDDSecured field to given value.

### HasAllDescriptionDDSecured

`func (o *SubAllocationTypeBlockSecurity) HasAllDescriptionDDSecured() bool`

HasAllDescriptionDDSecured returns a boolean if a field has been set.

### GetRatesSecuredfromGNR

`func (o *SubAllocationTypeBlockSecurity) GetRatesSecuredfromGNR() bool`

GetRatesSecuredfromGNR returns the RatesSecuredfromGNR field if non-nil, zero value otherwise.

### GetRatesSecuredfromGNROk

`func (o *SubAllocationTypeBlockSecurity) GetRatesSecuredfromGNROk() (*bool, bool)`

GetRatesSecuredfromGNROk returns a tuple with the RatesSecuredfromGNR field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatesSecuredfromGNR

`func (o *SubAllocationTypeBlockSecurity) SetRatesSecuredfromGNR(v bool)`

SetRatesSecuredfromGNR sets RatesSecuredfromGNR field to given value.

### HasRatesSecuredfromGNR

`func (o *SubAllocationTypeBlockSecurity) HasRatesSecuredfromGNR() bool`

HasRatesSecuredfromGNR returns a boolean if a field has been set.

### GetRatesSecuredfromAllDisplays

`func (o *SubAllocationTypeBlockSecurity) GetRatesSecuredfromAllDisplays() bool`

GetRatesSecuredfromAllDisplays returns the RatesSecuredfromAllDisplays field if non-nil, zero value otherwise.

### GetRatesSecuredfromAllDisplaysOk

`func (o *SubAllocationTypeBlockSecurity) GetRatesSecuredfromAllDisplaysOk() (*bool, bool)`

GetRatesSecuredfromAllDisplaysOk returns a tuple with the RatesSecuredfromAllDisplays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatesSecuredfromAllDisplays

`func (o *SubAllocationTypeBlockSecurity) SetRatesSecuredfromAllDisplays(v bool)`

SetRatesSecuredfromAllDisplays sets RatesSecuredfromAllDisplays field to given value.

### HasRatesSecuredfromAllDisplays

`func (o *SubAllocationTypeBlockSecurity) HasRatesSecuredfromAllDisplays() bool`

HasRatesSecuredfromAllDisplays returns a boolean if a field has been set.

### GetHousingInformationSecured

`func (o *SubAllocationTypeBlockSecurity) GetHousingInformationSecured() bool`

GetHousingInformationSecured returns the HousingInformationSecured field if non-nil, zero value otherwise.

### GetHousingInformationSecuredOk

`func (o *SubAllocationTypeBlockSecurity) GetHousingInformationSecuredOk() (*bool, bool)`

GetHousingInformationSecuredOk returns a tuple with the HousingInformationSecured field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousingInformationSecured

`func (o *SubAllocationTypeBlockSecurity) SetHousingInformationSecured(v bool)`

SetHousingInformationSecured sets HousingInformationSecured field to given value.

### HasHousingInformationSecured

`func (o *SubAllocationTypeBlockSecurity) HasHousingInformationSecured() bool`

HasHousingInformationSecured returns a boolean if a field has been set.

### GetDaysDepositRequired

`func (o *SubAllocationTypeBlockSecurity) GetDaysDepositRequired() float32`

GetDaysDepositRequired returns the DaysDepositRequired field if non-nil, zero value otherwise.

### GetDaysDepositRequiredOk

`func (o *SubAllocationTypeBlockSecurity) GetDaysDepositRequiredOk() (*float32, bool)`

GetDaysDepositRequiredOk returns a tuple with the DaysDepositRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysDepositRequired

`func (o *SubAllocationTypeBlockSecurity) SetDaysDepositRequired(v float32)`

SetDaysDepositRequired sets DaysDepositRequired field to given value.

### HasDaysDepositRequired

`func (o *SubAllocationTypeBlockSecurity) HasDaysDepositRequired() bool`

HasDaysDepositRequired returns a boolean if a field has been set.

### GetAdvanceCancelDays

`func (o *SubAllocationTypeBlockSecurity) GetAdvanceCancelDays() float32`

GetAdvanceCancelDays returns the AdvanceCancelDays field if non-nil, zero value otherwise.

### GetAdvanceCancelDaysOk

`func (o *SubAllocationTypeBlockSecurity) GetAdvanceCancelDaysOk() (*float32, bool)`

GetAdvanceCancelDaysOk returns a tuple with the AdvanceCancelDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCancelDays

`func (o *SubAllocationTypeBlockSecurity) SetAdvanceCancelDays(v float32)`

SetAdvanceCancelDays sets AdvanceCancelDays field to given value.

### HasAdvanceCancelDays

`func (o *SubAllocationTypeBlockSecurity) HasAdvanceCancelDays() bool`

HasAdvanceCancelDays returns a boolean if a field has been set.

### GetReturnOneDayAtTimeYn

`func (o *SubAllocationTypeBlockSecurity) GetReturnOneDayAtTimeYn() bool`

GetReturnOneDayAtTimeYn returns the ReturnOneDayAtTimeYn field if non-nil, zero value otherwise.

### GetReturnOneDayAtTimeYnOk

`func (o *SubAllocationTypeBlockSecurity) GetReturnOneDayAtTimeYnOk() (*bool, bool)`

GetReturnOneDayAtTimeYnOk returns a tuple with the ReturnOneDayAtTimeYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnOneDayAtTimeYn

`func (o *SubAllocationTypeBlockSecurity) SetReturnOneDayAtTimeYn(v bool)`

SetReturnOneDayAtTimeYn sets ReturnOneDayAtTimeYn field to given value.

### HasReturnOneDayAtTimeYn

`func (o *SubAllocationTypeBlockSecurity) HasReturnOneDayAtTimeYn() bool`

HasReturnOneDayAtTimeYn returns a boolean if a field has been set.

### GetCommissionableYn

`func (o *SubAllocationTypeBlockSecurity) GetCommissionableYn() bool`

GetCommissionableYn returns the CommissionableYn field if non-nil, zero value otherwise.

### GetCommissionableYnOk

`func (o *SubAllocationTypeBlockSecurity) GetCommissionableYnOk() (*bool, bool)`

GetCommissionableYnOk returns a tuple with the CommissionableYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionableYn

`func (o *SubAllocationTypeBlockSecurity) SetCommissionableYn(v bool)`

SetCommissionableYn sets CommissionableYn field to given value.

### HasCommissionableYn

`func (o *SubAllocationTypeBlockSecurity) HasCommissionableYn() bool`

HasCommissionableYn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


