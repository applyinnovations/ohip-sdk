# CommissionCodeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property of the commission codes. | [optional] 
**CommissionCode** | Pointer to **string** | Commission code for which details are fetched. | [optional] 
**Description** | Pointer to **string** | Commission code description for which details are fetched. | [optional] 
**Sequence** | Pointer to **int32** | Commission code sequence number. | [optional] 
**CommissionCodeHoldStatus** | Pointer to [**CommissionCodeHoldStatusType**](CommissionCodeHoldStatusType.md) |  | [optional] 
**ReservationHistoryRecords** | Pointer to [**CommissionPaidDetailsType**](CommissionPaidDetailsType.md) |  | [optional] 
**CommissionCalculation** | Pointer to [**CommissionCalculationType**](CommissionCalculationType.md) |  | [optional] 
**TaxPercentage** | Pointer to **float32** | Commission paid Tax details. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewCommissionCodeInfoType

`func NewCommissionCodeInfoType() *CommissionCodeInfoType`

NewCommissionCodeInfoType instantiates a new CommissionCodeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodeInfoTypeWithDefaults

`func NewCommissionCodeInfoTypeWithDefaults() *CommissionCodeInfoType`

NewCommissionCodeInfoTypeWithDefaults instantiates a new CommissionCodeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CommissionCodeInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommissionCodeInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommissionCodeInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommissionCodeInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCommissionCode

`func (o *CommissionCodeInfoType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *CommissionCodeInfoType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *CommissionCodeInfoType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *CommissionCodeInfoType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetDescription

`func (o *CommissionCodeInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CommissionCodeInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CommissionCodeInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CommissionCodeInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *CommissionCodeInfoType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CommissionCodeInfoType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CommissionCodeInfoType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CommissionCodeInfoType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCommissionCodeHoldStatus

`func (o *CommissionCodeInfoType) GetCommissionCodeHoldStatus() CommissionCodeHoldStatusType`

GetCommissionCodeHoldStatus returns the CommissionCodeHoldStatus field if non-nil, zero value otherwise.

### GetCommissionCodeHoldStatusOk

`func (o *CommissionCodeInfoType) GetCommissionCodeHoldStatusOk() (*CommissionCodeHoldStatusType, bool)`

GetCommissionCodeHoldStatusOk returns a tuple with the CommissionCodeHoldStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCodeHoldStatus

`func (o *CommissionCodeInfoType) SetCommissionCodeHoldStatus(v CommissionCodeHoldStatusType)`

SetCommissionCodeHoldStatus sets CommissionCodeHoldStatus field to given value.

### HasCommissionCodeHoldStatus

`func (o *CommissionCodeInfoType) HasCommissionCodeHoldStatus() bool`

HasCommissionCodeHoldStatus returns a boolean if a field has been set.

### GetReservationHistoryRecords

`func (o *CommissionCodeInfoType) GetReservationHistoryRecords() CommissionPaidDetailsType`

GetReservationHistoryRecords returns the ReservationHistoryRecords field if non-nil, zero value otherwise.

### GetReservationHistoryRecordsOk

`func (o *CommissionCodeInfoType) GetReservationHistoryRecordsOk() (*CommissionPaidDetailsType, bool)`

GetReservationHistoryRecordsOk returns a tuple with the ReservationHistoryRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationHistoryRecords

`func (o *CommissionCodeInfoType) SetReservationHistoryRecords(v CommissionPaidDetailsType)`

SetReservationHistoryRecords sets ReservationHistoryRecords field to given value.

### HasReservationHistoryRecords

`func (o *CommissionCodeInfoType) HasReservationHistoryRecords() bool`

HasReservationHistoryRecords returns a boolean if a field has been set.

### GetCommissionCalculation

`func (o *CommissionCodeInfoType) GetCommissionCalculation() CommissionCalculationType`

GetCommissionCalculation returns the CommissionCalculation field if non-nil, zero value otherwise.

### GetCommissionCalculationOk

`func (o *CommissionCodeInfoType) GetCommissionCalculationOk() (*CommissionCalculationType, bool)`

GetCommissionCalculationOk returns a tuple with the CommissionCalculation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCalculation

`func (o *CommissionCodeInfoType) SetCommissionCalculation(v CommissionCalculationType)`

SetCommissionCalculation sets CommissionCalculation field to given value.

### HasCommissionCalculation

`func (o *CommissionCodeInfoType) HasCommissionCalculation() bool`

HasCommissionCalculation returns a boolean if a field has been set.

### GetTaxPercentage

`func (o *CommissionCodeInfoType) GetTaxPercentage() float32`

GetTaxPercentage returns the TaxPercentage field if non-nil, zero value otherwise.

### GetTaxPercentageOk

`func (o *CommissionCodeInfoType) GetTaxPercentageOk() (*float32, bool)`

GetTaxPercentageOk returns a tuple with the TaxPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercentage

`func (o *CommissionCodeInfoType) SetTaxPercentage(v float32)`

SetTaxPercentage sets TaxPercentage field to given value.

### HasTaxPercentage

`func (o *CommissionCodeInfoType) HasTaxPercentage() bool`

HasTaxPercentage returns a boolean if a field has been set.

### GetManagedBy

`func (o *CommissionCodeInfoType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *CommissionCodeInfoType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *CommissionCodeInfoType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *CommissionCodeInfoType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


