# PostActivityLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLocations** | Pointer to [**ActivityLocationsType**](ActivityLocationsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostActivityLocationsRequest

`func NewPostActivityLocationsRequest() *PostActivityLocationsRequest`

NewPostActivityLocationsRequest instantiates a new PostActivityLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostActivityLocationsRequestWithDefaults

`func NewPostActivityLocationsRequestWithDefaults() *PostActivityLocationsRequest`

NewPostActivityLocationsRequestWithDefaults instantiates a new PostActivityLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLocations

`func (o *PostActivityLocationsRequest) GetActivityLocations() ActivityLocationsType`

GetActivityLocations returns the ActivityLocations field if non-nil, zero value otherwise.

### GetActivityLocationsOk

`func (o *PostActivityLocationsRequest) GetActivityLocationsOk() (*ActivityLocationsType, bool)`

GetActivityLocationsOk returns a tuple with the ActivityLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLocations

`func (o *PostActivityLocationsRequest) SetActivityLocations(v ActivityLocationsType)`

SetActivityLocations sets ActivityLocations field to given value.

### HasActivityLocations

`func (o *PostActivityLocationsRequest) HasActivityLocations() bool`

HasActivityLocations returns a boolean if a field has been set.

### GetLinks

`func (o *PostActivityLocationsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostActivityLocationsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostActivityLocationsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostActivityLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostActivityLocationsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostActivityLocationsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostActivityLocationsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostActivityLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


