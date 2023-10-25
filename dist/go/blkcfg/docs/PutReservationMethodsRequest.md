# PutReservationMethodsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationMethods** | Pointer to [**[]ReservationMethodType**](ReservationMethodType.md) | List of Reservation Methods. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutReservationMethodsRequest

`func NewPutReservationMethodsRequest() *PutReservationMethodsRequest`

NewPutReservationMethodsRequest instantiates a new PutReservationMethodsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservationMethodsRequestWithDefaults

`func NewPutReservationMethodsRequestWithDefaults() *PutReservationMethodsRequest`

NewPutReservationMethodsRequestWithDefaults instantiates a new PutReservationMethodsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutReservationMethodsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservationMethodsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservationMethodsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservationMethodsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationMethods

`func (o *PutReservationMethodsRequest) GetReservationMethods() []ReservationMethodType`

GetReservationMethods returns the ReservationMethods field if non-nil, zero value otherwise.

### GetReservationMethodsOk

`func (o *PutReservationMethodsRequest) GetReservationMethodsOk() (*[]ReservationMethodType, bool)`

GetReservationMethodsOk returns a tuple with the ReservationMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMethods

`func (o *PutReservationMethodsRequest) SetReservationMethods(v []ReservationMethodType)`

SetReservationMethods sets ReservationMethods field to given value.

### HasReservationMethods

`func (o *PutReservationMethodsRequest) HasReservationMethods() bool`

HasReservationMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservationMethodsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservationMethodsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservationMethodsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservationMethodsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


