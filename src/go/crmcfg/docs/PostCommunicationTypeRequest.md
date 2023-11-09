# PostCommunicationTypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationType** | Pointer to [**CommunicationTypeType**](CommunicationTypeType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCommunicationTypeRequest

`func NewPostCommunicationTypeRequest() *PostCommunicationTypeRequest`

NewPostCommunicationTypeRequest instantiates a new PostCommunicationTypeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCommunicationTypeRequestWithDefaults

`func NewPostCommunicationTypeRequestWithDefaults() *PostCommunicationTypeRequest`

NewPostCommunicationTypeRequestWithDefaults instantiates a new PostCommunicationTypeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationType

`func (o *PostCommunicationTypeRequest) GetCommunicationType() CommunicationTypeType`

GetCommunicationType returns the CommunicationType field if non-nil, zero value otherwise.

### GetCommunicationTypeOk

`func (o *PostCommunicationTypeRequest) GetCommunicationTypeOk() (*CommunicationTypeType, bool)`

GetCommunicationTypeOk returns a tuple with the CommunicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationType

`func (o *PostCommunicationTypeRequest) SetCommunicationType(v CommunicationTypeType)`

SetCommunicationType sets CommunicationType field to given value.

### HasCommunicationType

`func (o *PostCommunicationTypeRequest) HasCommunicationType() bool`

HasCommunicationType returns a boolean if a field has been set.

### GetLinks

`func (o *PostCommunicationTypeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCommunicationTypeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCommunicationTypeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCommunicationTypeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCommunicationTypeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCommunicationTypeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCommunicationTypeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCommunicationTypeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


