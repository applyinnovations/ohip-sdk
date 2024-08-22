# ReservationPackageScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComputedResvPrice** | Pointer to **float32** | Computed Reservation Price of the package. Calculation Will Be Performed Based On Other Parameters. | [optional] 
**ConsumptionDate** | Pointer to **string** | The date the package was used or can be used. | [optional] 
**OriginalUnitAllowance** | Pointer to **float32** | The original allowance per unit of the package if it has been changed. | [optional] 
**OriginalUnitPrice** | Pointer to **float32** | The original price per unit of the package if it has been changed. | [optional] 
**ReservationDate** | Pointer to **string** | The date of the Reservation when this package is applicable. This can be different from the date the package will be consumed. Example are next day packages. Reservation date is when the package is applied to the guest and Consumption date is when the guest can consume the package. | [optional] 
**TotalQuantity** | Pointer to **int32** | The total quantity of the package for this date, calculated based on the calculation rule as defined in the PackageHeaderType | [optional] 
**UnitAllowance** | Pointer to **float32** | The allowance per unit of the package. | [optional] 
**UnitPrice** | Pointer to **float32** | The price per unit of the package. | [optional] 

## Methods

### NewReservationPackageScheduleType

`func NewReservationPackageScheduleType() *ReservationPackageScheduleType`

NewReservationPackageScheduleType instantiates a new ReservationPackageScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPackageScheduleTypeWithDefaults

`func NewReservationPackageScheduleTypeWithDefaults() *ReservationPackageScheduleType`

NewReservationPackageScheduleTypeWithDefaults instantiates a new ReservationPackageScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComputedResvPrice

`func (o *ReservationPackageScheduleType) GetComputedResvPrice() float32`

GetComputedResvPrice returns the ComputedResvPrice field if non-nil, zero value otherwise.

### GetComputedResvPriceOk

`func (o *ReservationPackageScheduleType) GetComputedResvPriceOk() (*float32, bool)`

GetComputedResvPriceOk returns a tuple with the ComputedResvPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedResvPrice

`func (o *ReservationPackageScheduleType) SetComputedResvPrice(v float32)`

SetComputedResvPrice sets ComputedResvPrice field to given value.

### HasComputedResvPrice

`func (o *ReservationPackageScheduleType) HasComputedResvPrice() bool`

HasComputedResvPrice returns a boolean if a field has been set.

### GetConsumptionDate

`func (o *ReservationPackageScheduleType) GetConsumptionDate() string`

GetConsumptionDate returns the ConsumptionDate field if non-nil, zero value otherwise.

### GetConsumptionDateOk

`func (o *ReservationPackageScheduleType) GetConsumptionDateOk() (*string, bool)`

GetConsumptionDateOk returns a tuple with the ConsumptionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionDate

`func (o *ReservationPackageScheduleType) SetConsumptionDate(v string)`

SetConsumptionDate sets ConsumptionDate field to given value.

### HasConsumptionDate

`func (o *ReservationPackageScheduleType) HasConsumptionDate() bool`

HasConsumptionDate returns a boolean if a field has been set.

### GetOriginalUnitAllowance

`func (o *ReservationPackageScheduleType) GetOriginalUnitAllowance() float32`

GetOriginalUnitAllowance returns the OriginalUnitAllowance field if non-nil, zero value otherwise.

### GetOriginalUnitAllowanceOk

`func (o *ReservationPackageScheduleType) GetOriginalUnitAllowanceOk() (*float32, bool)`

GetOriginalUnitAllowanceOk returns a tuple with the OriginalUnitAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalUnitAllowance

`func (o *ReservationPackageScheduleType) SetOriginalUnitAllowance(v float32)`

SetOriginalUnitAllowance sets OriginalUnitAllowance field to given value.

### HasOriginalUnitAllowance

`func (o *ReservationPackageScheduleType) HasOriginalUnitAllowance() bool`

HasOriginalUnitAllowance returns a boolean if a field has been set.

### GetOriginalUnitPrice

`func (o *ReservationPackageScheduleType) GetOriginalUnitPrice() float32`

GetOriginalUnitPrice returns the OriginalUnitPrice field if non-nil, zero value otherwise.

### GetOriginalUnitPriceOk

`func (o *ReservationPackageScheduleType) GetOriginalUnitPriceOk() (*float32, bool)`

GetOriginalUnitPriceOk returns a tuple with the OriginalUnitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalUnitPrice

`func (o *ReservationPackageScheduleType) SetOriginalUnitPrice(v float32)`

SetOriginalUnitPrice sets OriginalUnitPrice field to given value.

### HasOriginalUnitPrice

`func (o *ReservationPackageScheduleType) HasOriginalUnitPrice() bool`

HasOriginalUnitPrice returns a boolean if a field has been set.

### GetReservationDate

`func (o *ReservationPackageScheduleType) GetReservationDate() string`

GetReservationDate returns the ReservationDate field if non-nil, zero value otherwise.

### GetReservationDateOk

`func (o *ReservationPackageScheduleType) GetReservationDateOk() (*string, bool)`

GetReservationDateOk returns a tuple with the ReservationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDate

`func (o *ReservationPackageScheduleType) SetReservationDate(v string)`

SetReservationDate sets ReservationDate field to given value.

### HasReservationDate

`func (o *ReservationPackageScheduleType) HasReservationDate() bool`

HasReservationDate returns a boolean if a field has been set.

### GetTotalQuantity

`func (o *ReservationPackageScheduleType) GetTotalQuantity() int32`

GetTotalQuantity returns the TotalQuantity field if non-nil, zero value otherwise.

### GetTotalQuantityOk

`func (o *ReservationPackageScheduleType) GetTotalQuantityOk() (*int32, bool)`

GetTotalQuantityOk returns a tuple with the TotalQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalQuantity

`func (o *ReservationPackageScheduleType) SetTotalQuantity(v int32)`

SetTotalQuantity sets TotalQuantity field to given value.

### HasTotalQuantity

`func (o *ReservationPackageScheduleType) HasTotalQuantity() bool`

HasTotalQuantity returns a boolean if a field has been set.

### GetUnitAllowance

`func (o *ReservationPackageScheduleType) GetUnitAllowance() float32`

GetUnitAllowance returns the UnitAllowance field if non-nil, zero value otherwise.

### GetUnitAllowanceOk

`func (o *ReservationPackageScheduleType) GetUnitAllowanceOk() (*float32, bool)`

GetUnitAllowanceOk returns a tuple with the UnitAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitAllowance

`func (o *ReservationPackageScheduleType) SetUnitAllowance(v float32)`

SetUnitAllowance sets UnitAllowance field to given value.

### HasUnitAllowance

`func (o *ReservationPackageScheduleType) HasUnitAllowance() bool`

HasUnitAllowance returns a boolean if a field has been set.

### GetUnitPrice

`func (o *ReservationPackageScheduleType) GetUnitPrice() float32`

GetUnitPrice returns the UnitPrice field if non-nil, zero value otherwise.

### GetUnitPriceOk

`func (o *ReservationPackageScheduleType) GetUnitPriceOk() (*float32, bool)`

GetUnitPriceOk returns a tuple with the UnitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitPrice

`func (o *ReservationPackageScheduleType) SetUnitPrice(v float32)`

SetUnitPrice sets UnitPrice field to given value.

### HasUnitPrice

`func (o *ReservationPackageScheduleType) HasUnitPrice() bool`

HasUnitPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


