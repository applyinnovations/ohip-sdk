# PostTransportationTemplatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransportationTemplates** | Pointer to [**[]HotelTransportationType**](HotelTransportationType.md) | Collection of transportation templates. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTransportationTemplatesRequest

`func NewPostTransportationTemplatesRequest() *PostTransportationTemplatesRequest`

NewPostTransportationTemplatesRequest instantiates a new PostTransportationTemplatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTransportationTemplatesRequestWithDefaults

`func NewPostTransportationTemplatesRequestWithDefaults() *PostTransportationTemplatesRequest`

NewPostTransportationTemplatesRequestWithDefaults instantiates a new PostTransportationTemplatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTransportationTemplatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTransportationTemplatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTransportationTemplatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTransportationTemplatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransportationTemplates

`func (o *PostTransportationTemplatesRequest) GetTransportationTemplates() []HotelTransportationType`

GetTransportationTemplates returns the TransportationTemplates field if non-nil, zero value otherwise.

### GetTransportationTemplatesOk

`func (o *PostTransportationTemplatesRequest) GetTransportationTemplatesOk() (*[]HotelTransportationType, bool)`

GetTransportationTemplatesOk returns a tuple with the TransportationTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationTemplates

`func (o *PostTransportationTemplatesRequest) SetTransportationTemplates(v []HotelTransportationType)`

SetTransportationTemplates sets TransportationTemplates field to given value.

### HasTransportationTemplates

`func (o *PostTransportationTemplatesRequest) HasTransportationTemplates() bool`

HasTransportationTemplates returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTransportationTemplatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTransportationTemplatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTransportationTemplatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTransportationTemplatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


