# EmailFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to [**EmailFileType**](EmailFileType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewEmailFile

`func NewEmailFile() *EmailFile`

NewEmailFile instantiates a new EmailFile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailFileWithDefaults

`func NewEmailFileWithDefaults() *EmailFile`

NewEmailFileWithDefaults instantiates a new EmailFile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *EmailFile) GetFile() EmailFileType`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *EmailFile) GetFileOk() (*EmailFileType, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *EmailFile) SetFile(v EmailFileType)`

SetFile sets File field to given value.

### HasFile

`func (o *EmailFile) HasFile() bool`

HasFile returns a boolean if a field has been set.

### GetLinks

`func (o *EmailFile) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EmailFile) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EmailFile) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EmailFile) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EmailFile) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EmailFile) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EmailFile) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EmailFile) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


