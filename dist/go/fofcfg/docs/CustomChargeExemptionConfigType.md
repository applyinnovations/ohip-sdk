# CustomChargeExemptionConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Exemption** | Pointer to **string** | Exemption | [optional] 
**Description** | Pointer to **string** | Exemption Desciption | [optional] 
**Percentage** | Pointer to **float32** | Exemption Percentage | [optional] 
**StartDate** | Pointer to **string** | Date when this Exemption will be effective | [optional] 
**EndDate** | Pointer to **string** | Date till the Exemption will be effective. | [optional] 
**InactiveDate** | Pointer to **string** | Date when this Exemption is Inactive | [optional] 
**IncludeInactive** | Pointer to **bool** | Indicator that tells whether to include inactive Custom Charge Ememptions. | [optional] 
**PropertyExemption** | Pointer to **bool** | Flag specifying if custom charge exemptions is property level or not. | [optional] 

## Methods

### NewCustomChargeExemptionConfigType

`func NewCustomChargeExemptionConfigType() *CustomChargeExemptionConfigType`

NewCustomChargeExemptionConfigType instantiates a new CustomChargeExemptionConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeExemptionConfigTypeWithDefaults

`func NewCustomChargeExemptionConfigTypeWithDefaults() *CustomChargeExemptionConfigType`

NewCustomChargeExemptionConfigTypeWithDefaults instantiates a new CustomChargeExemptionConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CustomChargeExemptionConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CustomChargeExemptionConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CustomChargeExemptionConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CustomChargeExemptionConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetExemption

`func (o *CustomChargeExemptionConfigType) GetExemption() string`

GetExemption returns the Exemption field if non-nil, zero value otherwise.

### GetExemptionOk

`func (o *CustomChargeExemptionConfigType) GetExemptionOk() (*string, bool)`

GetExemptionOk returns a tuple with the Exemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExemption

`func (o *CustomChargeExemptionConfigType) SetExemption(v string)`

SetExemption sets Exemption field to given value.

### HasExemption

`func (o *CustomChargeExemptionConfigType) HasExemption() bool`

HasExemption returns a boolean if a field has been set.

### GetDescription

`func (o *CustomChargeExemptionConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CustomChargeExemptionConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CustomChargeExemptionConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CustomChargeExemptionConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPercentage

`func (o *CustomChargeExemptionConfigType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CustomChargeExemptionConfigType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CustomChargeExemptionConfigType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *CustomChargeExemptionConfigType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetStartDate

`func (o *CustomChargeExemptionConfigType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *CustomChargeExemptionConfigType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *CustomChargeExemptionConfigType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *CustomChargeExemptionConfigType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *CustomChargeExemptionConfigType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *CustomChargeExemptionConfigType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *CustomChargeExemptionConfigType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *CustomChargeExemptionConfigType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetInactiveDate

`func (o *CustomChargeExemptionConfigType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *CustomChargeExemptionConfigType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *CustomChargeExemptionConfigType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *CustomChargeExemptionConfigType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetIncludeInactive

`func (o *CustomChargeExemptionConfigType) GetIncludeInactive() bool`

GetIncludeInactive returns the IncludeInactive field if non-nil, zero value otherwise.

### GetIncludeInactiveOk

`func (o *CustomChargeExemptionConfigType) GetIncludeInactiveOk() (*bool, bool)`

GetIncludeInactiveOk returns a tuple with the IncludeInactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInactive

`func (o *CustomChargeExemptionConfigType) SetIncludeInactive(v bool)`

SetIncludeInactive sets IncludeInactive field to given value.

### HasIncludeInactive

`func (o *CustomChargeExemptionConfigType) HasIncludeInactive() bool`

HasIncludeInactive returns a boolean if a field has been set.

### GetPropertyExemption

`func (o *CustomChargeExemptionConfigType) GetPropertyExemption() bool`

GetPropertyExemption returns the PropertyExemption field if non-nil, zero value otherwise.

### GetPropertyExemptionOk

`func (o *CustomChargeExemptionConfigType) GetPropertyExemptionOk() (*bool, bool)`

GetPropertyExemptionOk returns a tuple with the PropertyExemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyExemption

`func (o *CustomChargeExemptionConfigType) SetPropertyExemption(v bool)`

SetPropertyExemption sets PropertyExemption field to given value.

### HasPropertyExemption

`func (o *CustomChargeExemptionConfigType) HasPropertyExemption() bool`

HasPropertyExemption returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


