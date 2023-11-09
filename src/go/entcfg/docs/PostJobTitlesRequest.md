# PostJobTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTitles** | Pointer to [**JobTitlesType**](JobTitlesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostJobTitlesRequest

`func NewPostJobTitlesRequest() *PostJobTitlesRequest`

NewPostJobTitlesRequest instantiates a new PostJobTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostJobTitlesRequestWithDefaults

`func NewPostJobTitlesRequestWithDefaults() *PostJobTitlesRequest`

NewPostJobTitlesRequestWithDefaults instantiates a new PostJobTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTitles

`func (o *PostJobTitlesRequest) GetJobTitles() JobTitlesType`

GetJobTitles returns the JobTitles field if non-nil, zero value otherwise.

### GetJobTitlesOk

`func (o *PostJobTitlesRequest) GetJobTitlesOk() (*JobTitlesType, bool)`

GetJobTitlesOk returns a tuple with the JobTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTitles

`func (o *PostJobTitlesRequest) SetJobTitles(v JobTitlesType)`

SetJobTitles sets JobTitles field to given value.

### HasJobTitles

`func (o *PostJobTitlesRequest) HasJobTitles() bool`

HasJobTitles returns a boolean if a field has been set.

### GetLinks

`func (o *PostJobTitlesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostJobTitlesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostJobTitlesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostJobTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostJobTitlesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostJobTitlesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostJobTitlesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostJobTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


