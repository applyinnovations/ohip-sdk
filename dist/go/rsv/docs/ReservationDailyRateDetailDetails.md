# ReservationDailyRateDetailDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NewDetail** | Pointer to [**[]DailyRateDetailType**](DailyRateDetailType.md) | Daily detail information with changes for Market Code, Source Code, Rate amount and Currency code, based on the validations done. | [optional] 
**ReturnedValidations** | Pointer to [**[]ValidationReturnType**](ValidationReturnType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationDailyRateDetailDetails

`func NewReservationDailyRateDetailDetails() *ReservationDailyRateDetailDetails`

NewReservationDailyRateDetailDetails instantiates a new ReservationDailyRateDetailDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDailyRateDetailDetailsWithDefaults

`func NewReservationDailyRateDetailDetailsWithDefaults() *ReservationDailyRateDetailDetails`

NewReservationDailyRateDetailDetailsWithDefaults instantiates a new ReservationDailyRateDetailDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationDailyRateDetailDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationDailyRateDetailDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationDailyRateDetailDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationDailyRateDetailDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewDetail

`func (o *ReservationDailyRateDetailDetails) GetNewDetail() []DailyRateDetailType`

GetNewDetail returns the NewDetail field if non-nil, zero value otherwise.

### GetNewDetailOk

`func (o *ReservationDailyRateDetailDetails) GetNewDetailOk() (*[]DailyRateDetailType, bool)`

GetNewDetailOk returns a tuple with the NewDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewDetail

`func (o *ReservationDailyRateDetailDetails) SetNewDetail(v []DailyRateDetailType)`

SetNewDetail sets NewDetail field to given value.

### HasNewDetail

`func (o *ReservationDailyRateDetailDetails) HasNewDetail() bool`

HasNewDetail returns a boolean if a field has been set.

### GetReturnedValidations

`func (o *ReservationDailyRateDetailDetails) GetReturnedValidations() []ValidationReturnType`

GetReturnedValidations returns the ReturnedValidations field if non-nil, zero value otherwise.

### GetReturnedValidationsOk

`func (o *ReservationDailyRateDetailDetails) GetReturnedValidationsOk() (*[]ValidationReturnType, bool)`

GetReturnedValidationsOk returns a tuple with the ReturnedValidations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnedValidations

`func (o *ReservationDailyRateDetailDetails) SetReturnedValidations(v []ValidationReturnType)`

SetReturnedValidations sets ReturnedValidations field to given value.

### HasReturnedValidations

`func (o *ReservationDailyRateDetailDetails) HasReturnedValidations() bool`

HasReturnedValidations returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationDailyRateDetailDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationDailyRateDetailDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationDailyRateDetailDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationDailyRateDetailDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


