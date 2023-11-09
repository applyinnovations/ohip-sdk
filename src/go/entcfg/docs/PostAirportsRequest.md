# PostAirportsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Airports** | Pointer to [**AirportsType**](AirportsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAirportsRequest

`func NewPostAirportsRequest() *PostAirportsRequest`

NewPostAirportsRequest instantiates a new PostAirportsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAirportsRequestWithDefaults

`func NewPostAirportsRequestWithDefaults() *PostAirportsRequest`

NewPostAirportsRequestWithDefaults instantiates a new PostAirportsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAirports

`func (o *PostAirportsRequest) GetAirports() AirportsType`

GetAirports returns the Airports field if non-nil, zero value otherwise.

### GetAirportsOk

`func (o *PostAirportsRequest) GetAirportsOk() (*AirportsType, bool)`

GetAirportsOk returns a tuple with the Airports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirports

`func (o *PostAirportsRequest) SetAirports(v AirportsType)`

SetAirports sets Airports field to given value.

### HasAirports

`func (o *PostAirportsRequest) HasAirports() bool`

HasAirports returns a boolean if a field has been set.

### GetLinks

`func (o *PostAirportsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAirportsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAirportsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAirportsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAirportsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAirportsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAirportsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAirportsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


