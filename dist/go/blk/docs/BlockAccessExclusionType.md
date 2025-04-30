# BlockAccessExclusionType

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

## Methods

### NewBlockAccessExclusionType

`func NewBlockAccessExclusionType() *BlockAccessExclusionType`

NewBlockAccessExclusionType instantiates a new BlockAccessExclusionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAccessExclusionTypeWithDefaults

`func NewBlockAccessExclusionTypeWithDefaults() *BlockAccessExclusionType`

NewBlockAccessExclusionTypeWithDefaults instantiates a new BlockAccessExclusionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceType

`func (o *BlockAccessExclusionType) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *BlockAccessExclusionType) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *BlockAccessExclusionType) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *BlockAccessExclusionType) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSourceValue

`func (o *BlockAccessExclusionType) GetSourceValue() string`

GetSourceValue returns the SourceValue field if non-nil, zero value otherwise.

### GetSourceValueOk

`func (o *BlockAccessExclusionType) GetSourceValueOk() (*string, bool)`

GetSourceValueOk returns a tuple with the SourceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceValue

`func (o *BlockAccessExclusionType) SetSourceValue(v string)`

SetSourceValue sets SourceValue field to given value.

### HasSourceValue

`func (o *BlockAccessExclusionType) HasSourceValue() bool`

HasSourceValue returns a boolean if a field has been set.

### GetAllowModifyReservation

`func (o *BlockAccessExclusionType) GetAllowModifyReservation() bool`

GetAllowModifyReservation returns the AllowModifyReservation field if non-nil, zero value otherwise.

### GetAllowModifyReservationOk

`func (o *BlockAccessExclusionType) GetAllowModifyReservationOk() (*bool, bool)`

GetAllowModifyReservationOk returns a tuple with the AllowModifyReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowModifyReservation

`func (o *BlockAccessExclusionType) SetAllowModifyReservation(v bool)`

SetAllowModifyReservation sets AllowModifyReservation field to given value.

### HasAllowModifyReservation

`func (o *BlockAccessExclusionType) HasAllowModifyReservation() bool`

HasAllowModifyReservation returns a boolean if a field has been set.

### GetAllowCancelReservation

`func (o *BlockAccessExclusionType) GetAllowCancelReservation() bool`

GetAllowCancelReservation returns the AllowCancelReservation field if non-nil, zero value otherwise.

### GetAllowCancelReservationOk

`func (o *BlockAccessExclusionType) GetAllowCancelReservationOk() (*bool, bool)`

GetAllowCancelReservationOk returns a tuple with the AllowCancelReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCancelReservation

`func (o *BlockAccessExclusionType) SetAllowCancelReservation(v bool)`

SetAllowCancelReservation sets AllowCancelReservation field to given value.

### HasAllowCancelReservation

`func (o *BlockAccessExclusionType) HasAllowCancelReservation() bool`

HasAllowCancelReservation returns a boolean if a field has been set.

### GetAllowCreateReservation

`func (o *BlockAccessExclusionType) GetAllowCreateReservation() bool`

GetAllowCreateReservation returns the AllowCreateReservation field if non-nil, zero value otherwise.

### GetAllowCreateReservationOk

`func (o *BlockAccessExclusionType) GetAllowCreateReservationOk() (*bool, bool)`

GetAllowCreateReservationOk returns a tuple with the AllowCreateReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCreateReservation

`func (o *BlockAccessExclusionType) SetAllowCreateReservation(v bool)`

SetAllowCreateReservation sets AllowCreateReservation field to given value.

### HasAllowCreateReservation

`func (o *BlockAccessExclusionType) HasAllowCreateReservation() bool`

HasAllowCreateReservation returns a boolean if a field has been set.

### GetInactive

`func (o *BlockAccessExclusionType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *BlockAccessExclusionType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *BlockAccessExclusionType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *BlockAccessExclusionType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetExcludeFromAvailability

`func (o *BlockAccessExclusionType) GetExcludeFromAvailability() bool`

GetExcludeFromAvailability returns the ExcludeFromAvailability field if non-nil, zero value otherwise.

### GetExcludeFromAvailabilityOk

`func (o *BlockAccessExclusionType) GetExcludeFromAvailabilityOk() (*bool, bool)`

GetExcludeFromAvailabilityOk returns a tuple with the ExcludeFromAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromAvailability

`func (o *BlockAccessExclusionType) SetExcludeFromAvailability(v bool)`

SetExcludeFromAvailability sets ExcludeFromAvailability field to given value.

### HasExcludeFromAvailability

`func (o *BlockAccessExclusionType) HasExcludeFromAvailability() bool`

HasExcludeFromAvailability returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


