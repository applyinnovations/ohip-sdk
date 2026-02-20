# RateAccessExclusionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceType** | Pointer to **string** | The type of source (CRO or Hotel code) for which the rate access exclusion is set. | [optional] 
**SourceValue** | Pointer to **string** | CRO or Hotel code value. | [optional] 
**AllowModifyReservation** | Pointer to **bool** | Allow to modify a reservation under this access exclusion. | [optional] 
**AllowCancelReservation** | Pointer to **bool** | Allow to cancel a reservation under this access exclusion. | [optional] 
**AllowCreateReservation** | Pointer to **bool** | Allow to create a reservation under this access exclusion. | [optional] 
**Inactive** | Pointer to **bool** | The rate access exclusion is inactive | [optional] 
**ExcludeFromAvailability** | Pointer to **bool** | Exclude a specific rate from availability | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 

## Methods

### NewRateAccessExclusionType

`func NewRateAccessExclusionType() *RateAccessExclusionType`

NewRateAccessExclusionType instantiates a new RateAccessExclusionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAccessExclusionTypeWithDefaults

`func NewRateAccessExclusionTypeWithDefaults() *RateAccessExclusionType`

NewRateAccessExclusionTypeWithDefaults instantiates a new RateAccessExclusionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceType

`func (o *RateAccessExclusionType) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *RateAccessExclusionType) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *RateAccessExclusionType) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *RateAccessExclusionType) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSourceValue

`func (o *RateAccessExclusionType) GetSourceValue() string`

GetSourceValue returns the SourceValue field if non-nil, zero value otherwise.

### GetSourceValueOk

`func (o *RateAccessExclusionType) GetSourceValueOk() (*string, bool)`

GetSourceValueOk returns a tuple with the SourceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceValue

`func (o *RateAccessExclusionType) SetSourceValue(v string)`

SetSourceValue sets SourceValue field to given value.

### HasSourceValue

`func (o *RateAccessExclusionType) HasSourceValue() bool`

HasSourceValue returns a boolean if a field has been set.

### GetAllowModifyReservation

`func (o *RateAccessExclusionType) GetAllowModifyReservation() bool`

GetAllowModifyReservation returns the AllowModifyReservation field if non-nil, zero value otherwise.

### GetAllowModifyReservationOk

`func (o *RateAccessExclusionType) GetAllowModifyReservationOk() (*bool, bool)`

GetAllowModifyReservationOk returns a tuple with the AllowModifyReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowModifyReservation

`func (o *RateAccessExclusionType) SetAllowModifyReservation(v bool)`

SetAllowModifyReservation sets AllowModifyReservation field to given value.

### HasAllowModifyReservation

`func (o *RateAccessExclusionType) HasAllowModifyReservation() bool`

HasAllowModifyReservation returns a boolean if a field has been set.

### GetAllowCancelReservation

`func (o *RateAccessExclusionType) GetAllowCancelReservation() bool`

GetAllowCancelReservation returns the AllowCancelReservation field if non-nil, zero value otherwise.

### GetAllowCancelReservationOk

`func (o *RateAccessExclusionType) GetAllowCancelReservationOk() (*bool, bool)`

GetAllowCancelReservationOk returns a tuple with the AllowCancelReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCancelReservation

`func (o *RateAccessExclusionType) SetAllowCancelReservation(v bool)`

SetAllowCancelReservation sets AllowCancelReservation field to given value.

### HasAllowCancelReservation

`func (o *RateAccessExclusionType) HasAllowCancelReservation() bool`

HasAllowCancelReservation returns a boolean if a field has been set.

### GetAllowCreateReservation

`func (o *RateAccessExclusionType) GetAllowCreateReservation() bool`

GetAllowCreateReservation returns the AllowCreateReservation field if non-nil, zero value otherwise.

### GetAllowCreateReservationOk

`func (o *RateAccessExclusionType) GetAllowCreateReservationOk() (*bool, bool)`

GetAllowCreateReservationOk returns a tuple with the AllowCreateReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCreateReservation

`func (o *RateAccessExclusionType) SetAllowCreateReservation(v bool)`

SetAllowCreateReservation sets AllowCreateReservation field to given value.

### HasAllowCreateReservation

`func (o *RateAccessExclusionType) HasAllowCreateReservation() bool`

HasAllowCreateReservation returns a boolean if a field has been set.

### GetInactive

`func (o *RateAccessExclusionType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RateAccessExclusionType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RateAccessExclusionType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RateAccessExclusionType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetExcludeFromAvailability

`func (o *RateAccessExclusionType) GetExcludeFromAvailability() bool`

GetExcludeFromAvailability returns the ExcludeFromAvailability field if non-nil, zero value otherwise.

### GetExcludeFromAvailabilityOk

`func (o *RateAccessExclusionType) GetExcludeFromAvailabilityOk() (*bool, bool)`

GetExcludeFromAvailabilityOk returns a tuple with the ExcludeFromAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromAvailability

`func (o *RateAccessExclusionType) SetExcludeFromAvailability(v bool)`

SetExcludeFromAvailability sets ExcludeFromAvailability field to given value.

### HasExcludeFromAvailability

`func (o *RateAccessExclusionType) HasExcludeFromAvailability() bool`

HasExcludeFromAvailability returns a boolean if a field has been set.

### GetDateRange

`func (o *RateAccessExclusionType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *RateAccessExclusionType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *RateAccessExclusionType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *RateAccessExclusionType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


