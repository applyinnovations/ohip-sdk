# ShareDistributionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistributionType** | Pointer to [**ShareDistributionInstructionType**](ShareDistributionInstructionType.md) |  | [optional] 
**ShareReservations** | Pointer to [**ShareReservationsType**](ShareReservationsType.md) |  | [optional] 

## Methods

### NewShareDistributionCriteria

`func NewShareDistributionCriteria() *ShareDistributionCriteria`

NewShareDistributionCriteria instantiates a new ShareDistributionCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShareDistributionCriteriaWithDefaults

`func NewShareDistributionCriteriaWithDefaults() *ShareDistributionCriteria`

NewShareDistributionCriteriaWithDefaults instantiates a new ShareDistributionCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributionType

`func (o *ShareDistributionCriteria) GetDistributionType() ShareDistributionInstructionType`

GetDistributionType returns the DistributionType field if non-nil, zero value otherwise.

### GetDistributionTypeOk

`func (o *ShareDistributionCriteria) GetDistributionTypeOk() (*ShareDistributionInstructionType, bool)`

GetDistributionTypeOk returns a tuple with the DistributionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributionType

`func (o *ShareDistributionCriteria) SetDistributionType(v ShareDistributionInstructionType)`

SetDistributionType sets DistributionType field to given value.

### HasDistributionType

`func (o *ShareDistributionCriteria) HasDistributionType() bool`

HasDistributionType returns a boolean if a field has been set.

### GetShareReservations

`func (o *ShareDistributionCriteria) GetShareReservations() ShareReservationsType`

GetShareReservations returns the ShareReservations field if non-nil, zero value otherwise.

### GetShareReservationsOk

`func (o *ShareDistributionCriteria) GetShareReservationsOk() (*ShareReservationsType, bool)`

GetShareReservationsOk returns a tuple with the ShareReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareReservations

`func (o *ShareDistributionCriteria) SetShareReservations(v ShareReservationsType)`

SetShareReservations sets ShareReservations field to given value.

### HasShareReservations

`func (o *ShareDistributionCriteria) HasShareReservations() bool`

HasShareReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


