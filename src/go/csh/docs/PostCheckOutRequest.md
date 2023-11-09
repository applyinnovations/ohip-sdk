# PostCheckOutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservation** | Pointer to [**CheckoutReservationType**](CheckoutReservationType.md) |  | [optional] 
**VerificationOnly** | Pointer to **bool** | VerificationOnly \&quot;true\&quot; validates the hotel code and reservation id supplied in the request. VerificationOnly \&quot;false\&quot; validates and then check-out the guest using the request details. Following codes might be returned during the verification: FOF00065 - The hotel code and/or reservation id is missing. FOF00066 - Reservation can&#39;t be found with the supplied hotel code and reservation id. FOF00107 - The guest&#39;s departure is not scheduled for today. Check-out not possible. FOF00109 - The guest&#39;s reservation is not in a valid status for check-out. FOF00108 - The guest has a balance. Check-out not possible. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCheckOutRequest

`func NewPostCheckOutRequest() *PostCheckOutRequest`

NewPostCheckOutRequest instantiates a new PostCheckOutRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCheckOutRequestWithDefaults

`func NewPostCheckOutRequestWithDefaults() *PostCheckOutRequest`

NewPostCheckOutRequestWithDefaults instantiates a new PostCheckOutRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostCheckOutRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCheckOutRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCheckOutRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCheckOutRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservation

`func (o *PostCheckOutRequest) GetReservation() CheckoutReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PostCheckOutRequest) GetReservationOk() (*CheckoutReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PostCheckOutRequest) SetReservation(v CheckoutReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PostCheckOutRequest) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *PostCheckOutRequest) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *PostCheckOutRequest) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *PostCheckOutRequest) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *PostCheckOutRequest) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCheckOutRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCheckOutRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCheckOutRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCheckOutRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


