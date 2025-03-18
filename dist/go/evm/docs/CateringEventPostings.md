# CateringEventPostings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostingMasterReservations** | Pointer to [**ReservationSnapshotsType**](ReservationSnapshotsType.md) |  | [optional] 
**CateringEventPostings** | Pointer to [**CateringEventPostingsType**](CateringEventPostingsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCateringEventPostings

`func NewCateringEventPostings() *CateringEventPostings`

NewCateringEventPostings instantiates a new CateringEventPostings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventPostingsWithDefaults

`func NewCateringEventPostingsWithDefaults() *CateringEventPostings`

NewCateringEventPostingsWithDefaults instantiates a new CateringEventPostings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostingMasterReservations

`func (o *CateringEventPostings) GetPostingMasterReservations() ReservationSnapshotsType`

GetPostingMasterReservations returns the PostingMasterReservations field if non-nil, zero value otherwise.

### GetPostingMasterReservationsOk

`func (o *CateringEventPostings) GetPostingMasterReservationsOk() (*ReservationSnapshotsType, bool)`

GetPostingMasterReservationsOk returns a tuple with the PostingMasterReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingMasterReservations

`func (o *CateringEventPostings) SetPostingMasterReservations(v ReservationSnapshotsType)`

SetPostingMasterReservations sets PostingMasterReservations field to given value.

### HasPostingMasterReservations

`func (o *CateringEventPostings) HasPostingMasterReservations() bool`

HasPostingMasterReservations returns a boolean if a field has been set.

### GetCateringEventPostings

`func (o *CateringEventPostings) GetCateringEventPostings() CateringEventPostingsType`

GetCateringEventPostings returns the CateringEventPostings field if non-nil, zero value otherwise.

### GetCateringEventPostingsOk

`func (o *CateringEventPostings) GetCateringEventPostingsOk() (*CateringEventPostingsType, bool)`

GetCateringEventPostingsOk returns a tuple with the CateringEventPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventPostings

`func (o *CateringEventPostings) SetCateringEventPostings(v CateringEventPostingsType)`

SetCateringEventPostings sets CateringEventPostings field to given value.

### HasCateringEventPostings

`func (o *CateringEventPostings) HasCateringEventPostings() bool`

HasCateringEventPostings returns a boolean if a field has been set.

### GetLinks

`func (o *CateringEventPostings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringEventPostings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringEventPostings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringEventPostings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringEventPostings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringEventPostings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringEventPostings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringEventPostings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


