# PostedDepositFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deposits** | Pointer to [**DepositPostingsType**](DepositPostingsType.md) |  | [optional] 
**FolioWindow** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) | Information regarding the new Deposit Folio created. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostedDepositFolio

`func NewPostedDepositFolio() *PostedDepositFolio`

NewPostedDepositFolio instantiates a new PostedDepositFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostedDepositFolioWithDefaults

`func NewPostedDepositFolioWithDefaults() *PostedDepositFolio`

NewPostedDepositFolioWithDefaults instantiates a new PostedDepositFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeposits

`func (o *PostedDepositFolio) GetDeposits() DepositPostingsType`

GetDeposits returns the Deposits field if non-nil, zero value otherwise.

### GetDepositsOk

`func (o *PostedDepositFolio) GetDepositsOk() (*DepositPostingsType, bool)`

GetDepositsOk returns a tuple with the Deposits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposits

`func (o *PostedDepositFolio) SetDeposits(v DepositPostingsType)`

SetDeposits sets Deposits field to given value.

### HasDeposits

`func (o *PostedDepositFolio) HasDeposits() bool`

HasDeposits returns a boolean if a field has been set.

### GetFolioWindow

`func (o *PostedDepositFolio) GetFolioWindow() []FolioWindowType`

GetFolioWindow returns the FolioWindow field if non-nil, zero value otherwise.

### GetFolioWindowOk

`func (o *PostedDepositFolio) GetFolioWindowOk() (*[]FolioWindowType, bool)`

GetFolioWindowOk returns a tuple with the FolioWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindow

`func (o *PostedDepositFolio) SetFolioWindow(v []FolioWindowType)`

SetFolioWindow sets FolioWindow field to given value.

### HasFolioWindow

`func (o *PostedDepositFolio) HasFolioWindow() bool`

HasFolioWindow returns a boolean if a field has been set.

### GetLinks

`func (o *PostedDepositFolio) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostedDepositFolio) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostedDepositFolio) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostedDepositFolio) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostedDepositFolio) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostedDepositFolio) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostedDepositFolio) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostedDepositFolio) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostedDepositFolio) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostedDepositFolio) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostedDepositFolio) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostedDepositFolio) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


