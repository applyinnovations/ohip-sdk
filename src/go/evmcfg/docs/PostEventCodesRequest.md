# PostEventCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventCodes** | Pointer to [**EventCodesType**](EventCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostEventCodesRequest

`func NewPostEventCodesRequest() *PostEventCodesRequest`

NewPostEventCodesRequest instantiates a new PostEventCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostEventCodesRequestWithDefaults

`func NewPostEventCodesRequestWithDefaults() *PostEventCodesRequest`

NewPostEventCodesRequestWithDefaults instantiates a new PostEventCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventCodes

`func (o *PostEventCodesRequest) GetEventCodes() EventCodesType`

GetEventCodes returns the EventCodes field if non-nil, zero value otherwise.

### GetEventCodesOk

`func (o *PostEventCodesRequest) GetEventCodesOk() (*EventCodesType, bool)`

GetEventCodesOk returns a tuple with the EventCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCodes

`func (o *PostEventCodesRequest) SetEventCodes(v EventCodesType)`

SetEventCodes sets EventCodes field to given value.

### HasEventCodes

`func (o *PostEventCodesRequest) HasEventCodes() bool`

HasEventCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostEventCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostEventCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostEventCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostEventCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostEventCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostEventCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostEventCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostEventCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


