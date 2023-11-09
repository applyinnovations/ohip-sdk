# PutActivityLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLocations** | Pointer to [**ActivityLocationsType**](ActivityLocationsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutActivityLocationsRequest

`func NewPutActivityLocationsRequest() *PutActivityLocationsRequest`

NewPutActivityLocationsRequest instantiates a new PutActivityLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutActivityLocationsRequestWithDefaults

`func NewPutActivityLocationsRequestWithDefaults() *PutActivityLocationsRequest`

NewPutActivityLocationsRequestWithDefaults instantiates a new PutActivityLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLocations

`func (o *PutActivityLocationsRequest) GetActivityLocations() ActivityLocationsType`

GetActivityLocations returns the ActivityLocations field if non-nil, zero value otherwise.

### GetActivityLocationsOk

`func (o *PutActivityLocationsRequest) GetActivityLocationsOk() (*ActivityLocationsType, bool)`

GetActivityLocationsOk returns a tuple with the ActivityLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLocations

`func (o *PutActivityLocationsRequest) SetActivityLocations(v ActivityLocationsType)`

SetActivityLocations sets ActivityLocations field to given value.

### HasActivityLocations

`func (o *PutActivityLocationsRequest) HasActivityLocations() bool`

HasActivityLocations returns a boolean if a field has been set.

### GetLinks

`func (o *PutActivityLocationsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutActivityLocationsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutActivityLocationsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutActivityLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutActivityLocationsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutActivityLocationsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutActivityLocationsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutActivityLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


