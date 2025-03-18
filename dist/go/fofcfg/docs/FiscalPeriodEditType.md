# FiscalPeriodEditType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Resort for which the Period is defined. | [optional] 
**YearId** | Pointer to **float32** | Id of the Year. | [optional] 
**StartDate** | Pointer to **string** | Start Date of the Period | [optional] 
**NewPeriod** | Pointer to [**FiscalPeriodType**](FiscalPeriodType.md) |  | [optional] 

## Methods

### NewFiscalPeriodEditType

`func NewFiscalPeriodEditType() *FiscalPeriodEditType`

NewFiscalPeriodEditType instantiates a new FiscalPeriodEditType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalPeriodEditTypeWithDefaults

`func NewFiscalPeriodEditTypeWithDefaults() *FiscalPeriodEditType`

NewFiscalPeriodEditTypeWithDefaults instantiates a new FiscalPeriodEditType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FiscalPeriodEditType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FiscalPeriodEditType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FiscalPeriodEditType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FiscalPeriodEditType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetYearId

`func (o *FiscalPeriodEditType) GetYearId() float32`

GetYearId returns the YearId field if non-nil, zero value otherwise.

### GetYearIdOk

`func (o *FiscalPeriodEditType) GetYearIdOk() (*float32, bool)`

GetYearIdOk returns a tuple with the YearId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearId

`func (o *FiscalPeriodEditType) SetYearId(v float32)`

SetYearId sets YearId field to given value.

### HasYearId

`func (o *FiscalPeriodEditType) HasYearId() bool`

HasYearId returns a boolean if a field has been set.

### GetStartDate

`func (o *FiscalPeriodEditType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *FiscalPeriodEditType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *FiscalPeriodEditType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *FiscalPeriodEditType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetNewPeriod

`func (o *FiscalPeriodEditType) GetNewPeriod() FiscalPeriodType`

GetNewPeriod returns the NewPeriod field if non-nil, zero value otherwise.

### GetNewPeriodOk

`func (o *FiscalPeriodEditType) GetNewPeriodOk() (*FiscalPeriodType, bool)`

GetNewPeriodOk returns a tuple with the NewPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewPeriod

`func (o *FiscalPeriodEditType) SetNewPeriod(v FiscalPeriodType)`

SetNewPeriod sets NewPeriod field to given value.

### HasNewPeriod

`func (o *FiscalPeriodEditType) HasNewPeriod() bool`

HasNewPeriod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


