# ChangeSourceCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**SourceCode** | Pointer to [**SourceCodeType**](SourceCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeSourceCodeRequest

`func NewChangeSourceCodeRequest() *ChangeSourceCodeRequest`

NewChangeSourceCodeRequest instantiates a new ChangeSourceCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeSourceCodeRequestWithDefaults

`func NewChangeSourceCodeRequestWithDefaults() *ChangeSourceCodeRequest`

NewChangeSourceCodeRequestWithDefaults instantiates a new ChangeSourceCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeSourceCodeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeSourceCodeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeSourceCodeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeSourceCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSourceCode

`func (o *ChangeSourceCodeRequest) GetSourceCode() SourceCodeType`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ChangeSourceCodeRequest) GetSourceCodeOk() (*SourceCodeType, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ChangeSourceCodeRequest) SetSourceCode(v SourceCodeType)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *ChangeSourceCodeRequest) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeSourceCodeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeSourceCodeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeSourceCodeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeSourceCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


