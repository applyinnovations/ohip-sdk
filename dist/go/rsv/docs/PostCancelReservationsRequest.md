# PostCancelReservationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelReservations** | Pointer to [**CancelReservationsType**](CancelReservationsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCancelReservationsRequest

`func NewPostCancelReservationsRequest() *PostCancelReservationsRequest`

NewPostCancelReservationsRequest instantiates a new PostCancelReservationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCancelReservationsRequestWithDefaults

`func NewPostCancelReservationsRequestWithDefaults() *PostCancelReservationsRequest`

NewPostCancelReservationsRequestWithDefaults instantiates a new PostCancelReservationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelReservations

`func (o *PostCancelReservationsRequest) GetCancelReservations() CancelReservationsType`

GetCancelReservations returns the CancelReservations field if non-nil, zero value otherwise.

### GetCancelReservationsOk

`func (o *PostCancelReservationsRequest) GetCancelReservationsOk() (*CancelReservationsType, bool)`

GetCancelReservationsOk returns a tuple with the CancelReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelReservations

`func (o *PostCancelReservationsRequest) SetCancelReservations(v CancelReservationsType)`

SetCancelReservations sets CancelReservations field to given value.

### HasCancelReservations

`func (o *PostCancelReservationsRequest) HasCancelReservations() bool`

HasCancelReservations returns a boolean if a field has been set.

### GetLinks

`func (o *PostCancelReservationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCancelReservationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCancelReservationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCancelReservationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCancelReservationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCancelReservationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCancelReservationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCancelReservationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


