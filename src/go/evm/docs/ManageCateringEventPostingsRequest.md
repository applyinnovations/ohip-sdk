# ManageCateringEventPostingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringEventPostings** | Pointer to [**CateringEventPostingsType**](CateringEventPostingsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PostingMasterReservations** | Pointer to [**ReservationSnapshotsType**](ReservationSnapshotsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewManageCateringEventPostingsRequest

`func NewManageCateringEventPostingsRequest() *ManageCateringEventPostingsRequest`

NewManageCateringEventPostingsRequest instantiates a new ManageCateringEventPostingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManageCateringEventPostingsRequestWithDefaults

`func NewManageCateringEventPostingsRequestWithDefaults() *ManageCateringEventPostingsRequest`

NewManageCateringEventPostingsRequestWithDefaults instantiates a new ManageCateringEventPostingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringEventPostings

`func (o *ManageCateringEventPostingsRequest) GetCateringEventPostings() CateringEventPostingsType`

GetCateringEventPostings returns the CateringEventPostings field if non-nil, zero value otherwise.

### GetCateringEventPostingsOk

`func (o *ManageCateringEventPostingsRequest) GetCateringEventPostingsOk() (*CateringEventPostingsType, bool)`

GetCateringEventPostingsOk returns a tuple with the CateringEventPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventPostings

`func (o *ManageCateringEventPostingsRequest) SetCateringEventPostings(v CateringEventPostingsType)`

SetCateringEventPostings sets CateringEventPostings field to given value.

### HasCateringEventPostings

`func (o *ManageCateringEventPostingsRequest) HasCateringEventPostings() bool`

HasCateringEventPostings returns a boolean if a field has been set.

### GetLinks

`func (o *ManageCateringEventPostingsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ManageCateringEventPostingsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ManageCateringEventPostingsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ManageCateringEventPostingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostingMasterReservations

`func (o *ManageCateringEventPostingsRequest) GetPostingMasterReservations() ReservationSnapshotsType`

GetPostingMasterReservations returns the PostingMasterReservations field if non-nil, zero value otherwise.

### GetPostingMasterReservationsOk

`func (o *ManageCateringEventPostingsRequest) GetPostingMasterReservationsOk() (*ReservationSnapshotsType, bool)`

GetPostingMasterReservationsOk returns a tuple with the PostingMasterReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingMasterReservations

`func (o *ManageCateringEventPostingsRequest) SetPostingMasterReservations(v ReservationSnapshotsType)`

SetPostingMasterReservations sets PostingMasterReservations field to given value.

### HasPostingMasterReservations

`func (o *ManageCateringEventPostingsRequest) HasPostingMasterReservations() bool`

HasPostingMasterReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *ManageCateringEventPostingsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ManageCateringEventPostingsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ManageCateringEventPostingsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ManageCateringEventPostingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


